export const getArticleAnalysis = (url) => {
  fetch(`http://localhost:8081/check_article?articleUrl=${url}`)
    .then((res) => res.json())
    .then(function (res) {
      TravelClient.displayArticleAnalysis(res);
    });
};

export const displayArticleAnalysis = (data) => {
  TravelClient.showResult();

  document.querySelector('#agreement span').innerHTML = data.agreement;
  document.querySelector('#confidence span').innerHTML = data.confidence;
  document.querySelector('#irony span').innerHTML = data.irony;
  document.querySelector('#score span').innerHTML = data.score_tag;
  document.querySelector('#subjectivity span').innerHTML = data.subjectivity;
};

export const showPreloader = () => {
  document.querySelector('#preloader').style.display = 'block';
  document.getElementById('results').style.display = 'none';
};

export const showResult = () => {
  document.querySelector('#preloader').style.display = 'none';
  document.getElementById('results').style.display = 'block';
};
