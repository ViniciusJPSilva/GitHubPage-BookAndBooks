export default function SearchBook({
  setCurrentPage,
  setSelectedBook,
  title,
  authors,
  image,
  data,
}) {
  let authorsList = [];

  if (authors) {
    authorsList = authors.map((item, index) => <h6 key={index}>{item}</h6>);
  }

  /**
   * Seleciona um livro e atualiza o estado da aplicação para exibir a página do livro selecionado.
   *
   * @function
   * @param {Event} e - O evento associado à chamada da função (geralmente um evento de clique do mouse).
   * @returns {void}
   */
  const selectBook = (e) => {
    e.preventDefault();

    setCurrentPage("BOOK");
    setSelectedBook(data);
  };

  return (
    <div className="row center-align">
      <a onClick={selectBook} href="#!" className="book-data">
        <div className="img-data">
          <img className="left" src={image} alt="" width={150} />
        </div>
        <div className="txt-data white-text">
          <h3 className="">{title}</h3>
          {authorsList}

          {data.volumeInfo.readingModes.text ? (
            <img src={require("../assets/verified.png")} alt="" width={30} />
          ) : (
            <></>
          )}
        </div>
      </a>
    </div>
  );
}
