# from turtle import update
from flask import Flask, render_template, request, jsonify
import logging
import json
from backend.database import DB

app = Flask(__name__)
SECRET = "areallybadsecreat"
app.config.update(
    DEBUG=True,
    SECRET_KEY = SECRET,
)

log = logging.getLogger("werkzeug")
log.disabled = True

# This list will hold all created profiles
profiles = {}

# Render a form to create a new profile
@app.route('/')
def create_profile_form():
    return "hello22"



@app.route('/getuserprofile')
def getuserprofile():
    username = request.args.get('username')
    return getuserprofile(username)

def getuserprofile(username):
    try:
        x = DB.getuserprofile(DB, username)
        profiles.__setitem__(username, x.json)
    except Exception as e:
        x = jsonify({'error':'user not found'})

    return x



@app.route('/login', methods=['POST'])
def login():
    ##edit when we have access to database
    authenticated = False

    username = request.form.get("username")
    password = request.form.get("password")
    authenticated = DB.authenticate(DB, username, password)

    if authenticated is not None:
        # print(authenticated.json['username'])
        # print(authenticated.json['userdata']['personal-info'])
        profiles[username] = (authenticated.json['userdata']) # assign the userdata to the local profiles cache
        return(authenticated.json['userdata'])
    else:
        return(jsonify({'error': 'Wrong Username/Password'}))



 #informaiton specific to the personal-info section - see updateagming for gaming specific info
@app.route('/updateuser', methods=['POST'])
def updateUser():
    username = request.form.get("username")
    getuserprofile(username)
    try:
        user = profiles[username]
        userinfo = user['personal-info']
        userinfo['icon']['foreground'] = request.form.get("foreground")
        userinfo['icon']['background'] = request.form.get("background")
        userinfo['pronouns'] = request.form.get("pronouns")
        userinfo['languages'] = request.form.get("languages")
        userinfo['blurp'] = request.form.get("blurp")
        x = DB.updateUserinfo(DB, username, user) # returns True or False is the record was updated
        if x:
            return(user)
        else:
            return jsonify({'error':'user not found'})
    except Exception as e:
        return jsonify({'error':'user not found'})

#  informaiton specific to the gaming-info section - see updateuser for gaming specific info
@app.route('/updateagming', methods=['POST'])
def updateagming():
    username = request.form.get("username")
    getuserprofile(username)
    try:
        user = profiles[username]
        gaminginfo = user['gaming-info']
        gaminginfo['availability']['weekdays'] = request.form.get("availability-weekdays")
        gaminginfo['availability']['weekends'] = request.form.get("availability-weekends")
        gaminginfo['communication-method'] = request.form.get("communication-method")
        gaminginfo['heat-level'] = request.form.get("heat-level")
        gaminginfo['matching-prefs'] = request.form.get("matching-prefs")
        gaminginfo['region'] = request.form.get("region")
        gaminginfo['try-hard-level'] = request.form.get("try-hard-level")
        gaminginfo['valorant-rank'] = request.form.get("valorant-rank")
        gaminginfo['valorant-role'] = request.form.get("valorant-role")
        gaminginfo['flairs'] = request.form.get("flairs")
        x = DB.updateUserinfo(DB, username, user) # returns True or False is the record was updated
        if x:
            return(user)
        else:
            return jsonify({'error':'user not found'})
    except Exception as e:
        return jsonify({'error':'user not found'})


@app.route('/addmatch')
def addmatch():
    username = request.args.get('username')
    match = request.args.get('match')
    return DB.addmatch(DB, username, match)

@app.route('/deletematch')
def deletematch():
    username = request.args.get('username')
    match = request.args.get('match')
    return DB.deletematch(DB, username, match)

@app.route('/getmatches')
def getmatches():
    username = request.args.get('username')
    return DB.getmatches(DB, username)



@app.route('/getsecurityquestion')
def getsecurityquestion():
    username = request.args.get('username')
    return DB.forgotPassword(DB, username)


@app.route('/resetpassword', methods=['POST'])
def resetpassword():
    username = request.form.get("username")
    newpassword = request.form.get("newpassword")
    securityanswer = request.form.get("securityanswer")
    if DB.resetPassword(DB, username, newpassword, securityanswer):
        return('password was reset')
    else:
        return('password was NOT reset')


@app.route('/getuserscores')
def getuserscores():
    username = request.args.get('username')
    return DB.getuserscores(DB, username)



if __name__ == '__main__':
    app.run(debug=False)
