export async function getProfile(userId: string) {
  const params = new URLSearchParams({ username: userId })
  const res = await fetch(`https://127.0.0.1:5000/getuserprofile?${params}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const json = await res.json()
  return json
}

export async function updatePersonalInformation(userId: string, formData: FormData) {
  const res = await fetch('/updateuser', {
    method: 'PUT',
    body: formData,
  })
  if (!res.ok) {
    return null
  }

  const json = await res.json()
  return json
}

export async function updateGameInformation(userId: string, formData: FormData) {
  const res = await fetch('/updateagming', {
    method: 'PUT',
    body: formData,
  })
  if (!res.ok) {
    return null
  }

  const json = await res.json()
  return json
}

export async function addUserLikes(userId: string, likedUserId: string) {
  const params = new URLSearchParams({
    username: userId,
    match: likedUserId,
  })

  const res = await fetch(`https://example.com?${params}`)
  if (!res.ok) {
    return null
  }

  return res.json()
}

export async function fetchRecommendedCandidates(userId: string) {
  const params = new URLSearchParams({ username: userId })
  const scoresRes = await fetch(`/getuserscores${params}?`, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
  if (!scoresRes.ok) {
    return null
  }

  const scores = await scoresRes.json()
  const sortedCandidates = Object.keys(scores).sort(
    (candidateIdA, candidateIdB) => scores[candidateIdB] - scores[candidateIdA]
  )

  const sortedCandidateProfiles = sortedCandidates.map(getProfile).filter((profile) => profile)
  return sortedCandidateProfiles
}
