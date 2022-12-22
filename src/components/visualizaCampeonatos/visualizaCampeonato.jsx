import "./content.css";
import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { AiOutlineSearch } from "react-icons/ai";
import { BiDollar, BiCalendar, BiMap } from "react-icons/bi";
import { BsPeople } from "react-icons/bs";
import logo from "./padel-thumbnail.jpg";

import { Card } from "./card";

export const Campeonato = () => {
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
            <Card img="" valor="1" data="hoje" nrDuplas="12" local="RG"/>
              {/* <Card img="./padel-thumbnail.jpg" valor="11" data="hoje" nrDuplas="12" local="RG"/>
              <Card img="./padel-thumbnail.jpg" valor="12" data="hoje" nrDuplas="12" local="RG"/>
              <Card img="./padel-thumbnail.jpg" valor="13" data="hoje" nrDuplas="12" local="RG"/> */}
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

