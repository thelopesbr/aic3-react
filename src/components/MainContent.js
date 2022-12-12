import "content.css";
function MainContent() {
  return (
    <main className="container">
      <div className="pesquisas_e_filtros">
        <span>{props.titulo}</span>
        <form action="#" className="search">
          <input type="text" id="search" placeholder="Encontre partidas..." />
          <i className="bx bx-search"></i>
          <input
            type="checkbox"
            id="include_self"
            className="checkbox_include"
          />
          <label for="include_self">{props.include_self}</label>
        </form>
      </div>
      <div className="body_container">corpo</div>
      <div className="pagination">
        <Pagination>
          <PaginationItem>
            <PaginationLink first href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" previous />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">4</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">5</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" next />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" last />
          </PaginationItem>
        </Pagination>
      </div>
    </main>
  );
}
export default MainContent;
