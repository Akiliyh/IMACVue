const getWordsData = async function name() {
  const response = await fetch(
    'https://api.wordnik.com/v4/words.json/randomWords?limit=500&hasDictionaryDef=true&excludePartOfSpeech=proper-noun,abbreviation&minCorpusCount=95000&minLength=3&maxLength=12&api_key=3we3tm2pohigikot1l08soicb6y4sgoqare3wzgrpbc5gif4v',
  )
  if (response.status == 200) {
    const data = await response.json()
    console.log(data)
    return data
  } else {
    throw new Error(response.statusText)
  }
}

const getWordData = async function name() {
  const response = await fetch(
    'https://api.wordnik.com/v4/words.json/randomWord?&hasDictionaryDef=true&excludePartOfSpeech=proper-noun,abbreviation&minCorpusCount=95000&minLength=3&maxLength=12&api_key=3we3tm2pohigikot1l08soicb6y4sgoqare3wzgrpbc5gif4v',
  )
  if (response.status == 200) {
    const data = await response.json()
    console.log(data)
    return data
  } else {
    throw new Error(response.statusText)
  }
}

const getRelatedWordsData = async function name(word) {
  const response = await fetch(
    'https://api.wordnik.com/v4/word.json/' +
      word +
      '/relatedWords?useCanonical=true&limitPerRelationshipType=1000&excludePartOfSpeech=proper-noun,abbreviation&api_key=3we3tm2pohigikot1l08soicb6y4sgoqare3wzgrpbc5gif4v',
  )
  if (response.status == 200) {
    const data = await response.json()
    console.log(data)
    return data
  } else {
    throw new Error(response.statusText)
  }
}

const getFilmData = async function name() {
  const response = await fetch(
    'https://api.themoviedb.org/3/discover/tv?api_key=91829b102a8b0a4070a072c0451eba5f',
  )

  if (response.status == 200) {
    const data = await response.json()
    console.log(data)
    return data
  } else {
    throw new Error(response.statusText)
  }
}

const getValveWebAPI = async function () {
  const response = await fetch('https://store.steampowered.com/pointssummary/ajaxgetasyncconfig')

  if (response.status == 200) {
    const data = await response.json()
    console.log(data)
    return data
  } else {
    throw new Error(response.statusText)
  }
}

export { getWordData, getFilmData, getValveWebAPI, getRelatedWordsData, getWordsData }
