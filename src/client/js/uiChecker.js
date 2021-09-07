const uiChecker = (res) => {
    const results = document.getElementById('results');
    results.innerHTML = '';

    const { confidence, subjectivity, agreement, irony, score_tag } = res;

    let outputTitle = document.createElement('p');
    outputTitle.innerHTML = '<h2>Results:</h2>';

    let confidenceOutput = document.createElement('p');
    confidenceOutput.innerHTML = `Confidence: ${confidence}%`;

    let subjectivityOutput = document.createElement('p');
    subjectivityOutput.innerHTML = `Subjectivity: ${subjectivity}`;

    let agreementOutput = document.createElement('p');
    agreementOutput.innerHTML = `Agreement: ${agreement}`;

    let ironyOutput = document.createElement('p');
    ironyOutput.innerHTML = `Irony: ${irony}`;

    let scoreTagOutput = document.createElement('p');
    scoreTagOutput.innerHTML = `Score Tag: ${score_tag}`;

    results.append(outputTitle);
    results.append(confidenceOutput);
    results.append(subjectivityOutput);
    results.append(agreementOutput);
    results.append(ironyOutput);
    results.append(scoreTagOutput);

}

export default uiChecker;
