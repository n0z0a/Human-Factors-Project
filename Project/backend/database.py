import snowflake.connector
import json
from flask import jsonify

class DB:
    with open('backend/creds.json') as f:
        data = json.load(f)
        username = data['username']
        password = data['password']
        SF_ACCOUNT = data["account"]
        SF_WH = data["warehouse"]

    con = None

    def initCon(self):
        self.con = snowflake.connector.connect(
                    user=self.username,
                    password=self.password,
                    account=self.SF_ACCOUNT,
                    warehouse=self.SF_WH,
                    database='MY_TEST_DB',
                    schema='FERENGI'
                    )                    

    def closeCon(self):
        self.con.close()

    def authenticate(self, uid, pwd):
        self.checkCon(self)
        cur = self.con.cursor()
        try:
            qry = "select username, userdata from profile where username='" + uid + "' and password = hash('" + pwd + "')"
            # print(qry)
            ret = cur.execute(qry).fetchone()
            if ret == None:
                None
            else:
                # print(ret[0])
                return jsonify(
                    username=ret[0],
                    userdata=json.loads(ret[1])
                )   
        finally:
            cur.close

    def createUser(self, uid, pwd, question, answer):
        self.checkCon()
        cur = self.con.cursor()
        try:
            ret = cur.execute("select * from profile where username='" + uid + "'").fetchone()
            if ret == None:
                qry = "insert into profile select '" + uid + "', hash('" + pwd + "'), '" + question + "', hash('" + answer + "')"
                # print(qry)
                cur.execute(qry)
                return True
                #return 'User ' + uid + ' was created!'
            else:
                return False
                #return 'A user with that name already exists. Choose another user name'            
        finally:
            cur.close()


    def forgotPassword(self, uid):
        self.checkCon(self)
        cur = self.con.cursor()
        try:
            qry = "select question from profile where username='" + uid + "'"
            # print(qry)
            ret = cur.execute(qry).fetchone()
            if ret == None:
                return 'No user with that username was found.'
            else:
                return ret[0]            
        finally:
            cur.close()       


    def resetPassword(self, uid, newpwd, answer):
        self.checkCon(self)
        cur = self.con.cursor()
        try:
            qry = "update profile set password = a.pwd from (select hash('" + newpwd + "') pwd from profile) a where username = '" + uid + "' and answer = hash('" + answer + "')"
            # print(qry)
            col1, col2 = cur.execute(qry).fetchone()
            if col1 > 0:
                #return "The password was successfully reset"
                return True
            else:
                #return "The username or security answer provided did not match. Password was not reset."
                return False            
        finally:
            cur.close()

    def deleteUser(self, uid):
        self.checkCon()
        cur = self.con.cursor()
        try:
            qry = "delete from profile where username='" + uid +"'"
            # print(qry)
            cur.execute(qry)   
        finally:
            cur.close()

    def updateGamingInfo(self, uid, info):
        self.checkCon(self)
        try:
            cur = self.con.cursor()
            qry = "update profile set userdata:gaming-info = parse_json('" + str(info).replace("'", '"') + "') where username = '" + uid + "'"
            print(qry)
            col1 = cur.execute(qry).fetchone()
            print(col1)
            if col1 is not None:
                return col1[0]
            else:
                return {'Error': 'User not found'}
        except Exception as e:
            # print(e)
            return {'Error': str(e)}
        finally:
            cur.close()

    def updateUserinfo(self, uid, info):
        # print(str(info).replace("'", '"'))
        self.checkCon(self)
        try:
            cur = self.con.cursor()
            qry = "update profile set userdata = parse_json('" + str(info).replace("'", '"') + "') where username = '" + uid + "'"
            # print(qry)
            col1 = cur.execute(qry).fetchone()
            # print(col1)
            if col1 is not None:
                return col1[0]
            else:
                return {'Error': 'User not found'}
        except Exception as e:
            # print(e)
            return {'Error': str(e)}
        finally:
            cur.close()

    def addmatch(self, uid, match):
        self.checkCon(self)
        try:
            cur = self.con.cursor()
            qry = f'''
            merge into MY_TEST_DB.FERENGI.MATCHES using (select '{uid}' username1, '{match}' match1) on user = username1 and match = match1
            when not matched then insert values ('{uid}', '{match}')'''
            # print(qry)
            ret = cur.execute(qry).fetchone()
            if ret is not None:
                return jsonify({"result":"match was added"})
        except Exception as e:
            # print(e)
            return  jsonify({'Error': str(e)})
        finally:
            cur.close()

    def deletematch(self, uid, match):
        self.checkCon(self)
        try:
            cur = self.con.cursor()
            qry = f'''
            delete from MY_TEST_DB.FERENGI.MATCHES where user = '{uid}' and match = '{match}'
            '''
            # print(qry)
            ret = cur.execute(qry).fetchone()
            if ret is not None:
                return jsonify({"result":"match was deleted"})
        except Exception as e:
            # print(e)
            return  jsonify({'Error': str(e)})
        finally:
            cur.close()        


    def getmatches(self, uid):
        self.checkCon(self)
        res = []
        try:
            cur = self.con.cursor()
            qry = f'''
            with m1 as (
                select user from matches where match = '{uid}'
            )
            select match
            from matches m2 
            inner join m1 on m2.match = m1.user
            where m2.user = '{uid}';
            '''
            print(qry)
            ret = cur.execute(qry)
            for record in ret:
                res.append(record[0])
            return jsonify({"matches":res})
        except Exception as e:
            # print(e)
            return  jsonify({'Error': str(e)})
        finally:
            cur.close()

    def getuserprofile(self, uid):
        self.checkCon(self)
        try:
            cur = self.con.cursor()
            qry = "select userdata from profile where username = '" + uid + "'"
            # print(qry)
            ret = cur.execute(qry).fetchone()
            # print(col1)
            if ret is not None:
                return jsonify(json.loads(ret[0]))
            else:
                return jsonify({'Error': 'User not found'})
        except Exception as e:
            # print(e)
            return  jsonify({'Error': str(e)})
        finally:
            cur.close()

    def getuserscores(self, uid):
        self.checkCon(self)
        foo = {}
        try:
            cur = self.con.cursor()
            qry = f'''
            
            select
            r.username,
            match(l.userdata, r.userdata) as score
            from profile l
            cross join profile r
            where l.username != r.username and
            l.username = '{uid}'
            order by 2 desc;'''
            print(qry)
            ret = cur.execute(qry)
            # print(col1)
            
            for record in ret:
                foo.__setitem__(record[0], record[1]) 
        except Exception as e:
            print(e)
            return  jsonify({'Error': str(e)})
        finally:
            cur.close()
            return jsonify(foo)


    def checkCon(self):
        if self.con is None or self.con.is_closed:
            self.initCon(self)
