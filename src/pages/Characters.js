const Character = () => {
    // vista de la descripción de cada uno de los personajes
    const view = `
        <div class="Character-inner">
            <article class="character-card">
                <img src="" alt="name">
                <h2>Name</h2>
            </article>
            <article class="character-card">
                <h3>Episodes: </h3>
                <h3>Status: </h3>
                <h3>Species: </h3>
                <h3>Gender: </h3>
                <h3>Origin: </h3>
                <h3>Last location: </h3>
            </article>
        </div>
    
    `;

    return view;
}

export default Character;