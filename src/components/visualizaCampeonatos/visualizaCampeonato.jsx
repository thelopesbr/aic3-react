import "./content.css";
import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { AiOutlineSearch } from "react-icons/ai";
import { BiDollar, BiCalendar, BiMap } from "react-icons/bi";
import { BsPeople } from "react-icons/bs";
import logo from "./padel-thumbnail.jpg";

function Container() {
  return (
    <div className="container_principal">
      <main className="container">
        <div className="pesquisas_e_filtros">
          <span>titulo</span>
          <form action="#" className="search">
            <div className="search_bar">
              <input
                type="text"
                id="search"
                placeholder="Encontre campeonatos..."
              />
              <AiOutlineSearch className="icon-search" />
            </div>
            <div className="checkbox_filter">
              <input
                type="checkbox"
                id="include_self"
                className="checkbox_include"
              />
              <label for="include_self">Meus campeonatos</label>
            </div>
          </form>
        </div>
        <div className="body_container">
          <div className="container_effect"></div>
          <div className="container_cards">
            <div className="card">
              <div className="img_content">
                <img
                  src={logo}
                  alt="photo-championship"
                  className="photo_championship"
                />
              </div>
              <div className="info_card">
                <div>
                  <BiDollar className="icon_card" />
                  <p>VALOR DO CAMPEONATO</p>
                </div>
                <div>
                  <BiCalendar className="icon_card" />
                  <p>DATA DO CAMPEONATO</p>
                </div>
                <div>
                  <BiMap className="icon_card" />
                  <p>LOCAL DO CAMPEONATO</p>
                </div>
                <div>
                  <BsPeople className="icon_card" />
                  <p>NR DE DUPLAS</p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="img_content">
                <img
                  src={logo}
                  alt="photo-championship"
                  className="photo_championship"
                />
              </div>
              <div className="info_card">
                <div>
                  <BiDollar className="icon_card" />
                  <p>VALOR DO CAMPEONATO</p>
                </div>
                <div>
                  <BiCalendar className="icon_card" />
                  <p>DATA DO CAMPEONATO</p>
                </div>
                <div>
                  <BiMap className="icon_card" />
                  <p>LOCAL DO CAMPEONATO</p>
                </div>
                <div>
                  <BsPeople className="icon_card" />
                  <p>NR DE DUPLAS</p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="img_content">
                <img
                  src={logo}
                  alt="photo-championship"
                  className="photo_championship"
                />
              </div>
              <div className="info_card">
                <div>
                  <BiDollar className="icon_card" />
                  <p>VALOR DO CAMPEONATO</p>
                </div>
                <div>
                  <BiCalendar className="icon_card" />
                  <p>DATA DO CAMPEONATO</p>
                </div>
                <div>
                  <BiMap className="icon_card" />
                  <p>LOCAL DO CAMPEONATO</p>
                </div>
                <div>
                  <BsPeople className="icon_card" />
                  <p>NR DE DUPLAS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pagination">
          <Pagination>
            <PaginationItem className="pagination_item">
              <PaginationLink href="#" className="pagination_link">
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem className="pagination_item">
              <PaginationLink href="#" className="pagination_link">
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem className="pagination_item">
              <PaginationLink href="#" className="pagination_link">
                3
              </PaginationLink>
            </PaginationItem>
            <PaginationItem className="pagination_item">
              <PaginationLink href="#" className="pagination_link">
                4
              </PaginationLink>
            </PaginationItem>
            <PaginationItem className="pagination_item">
              <PaginationLink href="#" className="pagination_link">
                5
              </PaginationLink>
            </PaginationItem>
          </Pagination>
        </div>
      </main>
    </div>
  );
}
export default Container;
