import Pagination from "./classe/Pagination.js";
import GestionnaireLicencesBingo from "./classe/GestionnaireLicensesBingo.js";
import { listeLicencesBingo } from "./data/listeLicensesBingo.js";

const paginationConteneur = document.querySelector(".pagination-conteneur");
const bingoConteneur = document.querySelector(".licence-conteneur");

const gestionnaireBingo = new GestionnaireLicencesBingo(bingoConteneur);
const gestionnairePagination = new Pagination(listeLicencesBingo, paginationConteneur);
