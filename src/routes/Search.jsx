import React from "react";
import bann from "../Assets/images/bann.webp";
import { Link } from "react-router-dom";

const Search = () => {
  return (
    <main>
      <section className="search-section">
        <div className="container">
          <div className="row">
            <aside className="col-lg-3 side-menu">
              <div className="filter-wrap">
                <div className="colse">
                  <i className="fa-light fa-xmark"></i>
                </div>
                <form action="">
                  <div className="input-field">
                    <label htmlFor="search">بحث</label>
                    <input type="text" id="search" name="search" />
                  </div>
                  {/*<!-- filter by department_name -->*/}

                  <div className="departments">
                    <h6>القسم</h6>
                    {/*<!-- level one of departments list -->*/}

                    <ul className="deps">
                      {/*<!-- programing and development department -->*/}
                      <li>
                        <div className="department-header">
                          <div className="dep_name">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#programing-development"
                              aria-expanded="true"
                              aria-controls="programing-development"
                            >
                              <span className="horizontal"></span>
                              <span className="vertical"></span>
                            </button>
                            برمجة وتطوير
                          </div>
                          <input
                            type="checkbox"
                            name="department"
                            id="department"
                            checked
                          />
                        </div>
                        <div
                          id="programing-development"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            {/*<!-- level two of departments list -->*/}

                            <ul className="deps">
                              {/*<!-- programing languages -->*/}

                              <li>
                                <div className="department-header">
                                  <div className="dep_name">
                                    <button
                                      className="accordion-button collapsed"
                                      type="button"
                                      data-bs-toggle="collapse"
                                      data-bs-target="#programing-languages"
                                      aria-expanded="true"
                                      aria-controls="programing-languages"
                                    >
                                      <span className="horizontal"></span>
                                      <span className="vertical"></span>
                                    </button>
                                    لغات البرمجة
                                  </div>
                                  <input
                                    type="checkbox"
                                    name="sub_department"
                                    id="sub_department"
                                  />
                                </div>
                                <div
                                  id="programing-languages"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="headingOne"
                                  data-bs-parent="#accordionExample"
                                >
                                  <div className="accordion-body">
                                    {/*<!-- level three of departments level -->*/}

                                    <ul className="deps">
                                      <li>
                                        <div className="department-header">
                                          <div className="dep_name">
                                            برمجة CSS و HTML
                                          </div>
                                          <input
                                            type="checkbox"
                                            name="sub_sub_department"
                                            id="sub_sub_department"
                                          />
                                        </div>
                                      </li>
                                      <li>
                                        <div className="department-header">
                                          <div className="dep_name">
                                            برمجة PHP
                                          </div>
                                          <input
                                            type="checkbox"
                                            name="sub_sub_department"
                                            id="sub_sub_department"
                                          />
                                        </div>
                                      </li>
                                      <li>
                                        <div className="department-header">
                                          <div className="dep_name">
                                            برمجة بايثون
                                          </div>
                                          <input
                                            type="checkbox"
                                            name="sub_sub_department"
                                            id="sub_sub_department"
                                          />
                                        </div>
                                      </li>
                                      <li>
                                        <div className="department-header">
                                          <div className="dep_name">
                                            برمجة Java و .NET
                                          </div>
                                          <input
                                            type="checkbox"
                                            name="sub_sub_department"
                                            id="sub_sub_department"
                                          />
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                              {/* <!-- wordpress -->*/}
                              <li>
                                <div className="department-header">
                                  <div className="dep_name">
                                    <button
                                      className="accordion-button collapsed"
                                      type="button"
                                      data-bs-toggle="collapse"
                                      data-bs-target="#wordpress"
                                      aria-expanded="true"
                                      aria-controls="wordpress"
                                    >
                                      <span className="horizontal"></span>
                                      <span className="vertical"></span>
                                    </button>
                                    خدمات ووردبريس
                                  </div>
                                  <input
                                    type="checkbox"
                                    name="sub_department"
                                    id="sub_department"
                                  />
                                </div>
                                <div
                                  id="wordpress"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="headingOne"
                                  data-bs-parent="#accordionExample"
                                >
                                  <div className="accordion-body">
                                    {/*<!-- level three of departments level -->*/}
                                    <ul className="deps">
                                      <li>
                                        <div className="department-header">
                                          <div className="dep_name">
                                            برمجة CSS و HTML
                                          </div>
                                          <input
                                            type="checkbox"
                                            name="sub_sub_department"
                                            id="sub_sub_department"
                                          />
                                        </div>
                                      </li>
                                      <li>
                                        <div className="department-header">
                                          <div className="dep_name">
                                            برمجة PHP
                                          </div>
                                          <input
                                            type="checkbox"
                                            name="sub_sub_department"
                                            id="sub_sub_department"
                                          />
                                        </div>
                                      </li>
                                      <li>
                                        <div className="department-header">
                                          <div className="dep_name">
                                            برمجة بايثون
                                          </div>
                                          <input
                                            type="checkbox"
                                            name="sub_sub_department"
                                            id="sub_sub_department"
                                          />
                                        </div>
                                      </li>
                                      <li>
                                        <div className="department-header">
                                          <div className="dep_name">
                                            برمجة Java و .NET
                                          </div>
                                          <input
                                            type="checkbox"
                                            name="sub_sub_department"
                                            id="sub_sub_department"
                                          />
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                              {/*<!-- e-commerce --> */}
                              <li>
                                <div className="department-header">
                                  <div className="dep_name">
                                    <button
                                      className="accordion-button collapsed"
                                      type="button"
                                      data-bs-toggle="collapse"
                                      data-bs-target="#ecommerce"
                                      aria-expanded="true"
                                      aria-controls="ecommerce"
                                    >
                                      <span className="horizontal"></span>
                                      <span className="vertical"></span>
                                    </button>
                                    تطوير متاجر إلكترونية
                                  </div>
                                  <input
                                    type="checkbox"
                                    name="sub_department"
                                    id="sub_department"
                                  />
                                </div>
                                <div
                                  id="ecommerce"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="headingOne"
                                  data-bs-parent="#accordionExample"
                                >
                                  <div className="accordion-body">
                                    {/* <!-- level three of departments level -->*/}

                                    <ul className="deps">
                                      <li>
                                        <div className="department-header">
                                          <div className="dep_name">
                                            برمجة CSS و HTML
                                          </div>
                                          <input
                                            type="checkbox"
                                            name="sub_sub_department"
                                            id="sub_sub_department"
                                          />
                                        </div>
                                      </li>
                                      <li>
                                        <div className="department-header">
                                          <div className="dep_name">
                                            برمجة PHP
                                          </div>
                                          <input
                                            type="checkbox"
                                            name="sub_sub_department"
                                            id="sub_sub_department"
                                          />
                                        </div>
                                      </li>
                                      <li>
                                        <div className="department-header">
                                          <div className="dep_name">
                                            برمجة بايثون
                                          </div>
                                          <input
                                            type="checkbox"
                                            name="sub_sub_department"
                                            id="sub_sub_department"
                                          />
                                        </div>
                                      </li>
                                      <li>
                                        <div className="department-header">
                                          <div className="dep_name">
                                            برمجة Java و .NET
                                          </div>
                                          <input
                                            type="checkbox"
                                            name="sub_sub_department"
                                            id="sub_sub_department"
                                          />
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                              {/*<!-- mobile apllication -->*/}
                              <li>
                                <div className="department-header">
                                  <div className="dep_name">
                                    <button
                                      className="accordion-button collapsed"
                                      type="button"
                                      data-bs-toggle="collapse"
                                      data-bs-target="#app-dev"
                                      aria-expanded="true"
                                      aria-controls="app-dev"
                                    >
                                      <span className="horizontal"></span>
                                      <span className="vertical"></span>
                                    </button>
                                    برمجة تطبيقات الجوال
                                  </div>
                                  <input
                                    type="checkbox"
                                    name="sub_department"
                                    id="sub_department"
                                  />
                                </div>
                                <div
                                  id="app-dev"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="headingOne"
                                  data-bs-parent="#accordionExample"
                                >
                                  <div className="accordion-body">
                                    {/* <!-- level three of departments level -->*/}

                                    <ul className="deps">
                                      <li>
                                        <div className="department-header">
                                          <div className="dep_name">
                                            برمجة CSS و HTML
                                          </div>
                                          <input
                                            type="checkbox"
                                            name="sub_sub_department"
                                            id="sub_sub_department"
                                          />
                                        </div>
                                      </li>
                                      <li>
                                        <div className="department-header">
                                          <div className="dep_name">
                                            برمجة PHP
                                          </div>
                                          <input
                                            type="checkbox"
                                            name="sub_sub_department"
                                            id="sub_sub_department"
                                          />
                                        </div>
                                      </li>
                                      <li>
                                        <div className="department-header">
                                          <div className="dep_name">
                                            برمجة بايثون
                                          </div>
                                          <input
                                            type="checkbox"
                                            name="sub_sub_department"
                                            id="sub_sub_department"
                                          />
                                        </div>
                                      </li>
                                      <li>
                                        <div className="department-header">
                                          <div className="dep_name">
                                            برمجة Java و .NET
                                          </div>
                                          <input
                                            type="checkbox"
                                            name="sub_sub_department"
                                            id="sub_sub_department"
                                          />
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>

                      {/* <!-- video design department -->*/}
                      <li>
                        <div className="department-header">
                          <div className="dep_name">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#video-design"
                              aria-expanded="true"
                              aria-controls="video-design"
                            >
                              <span className="horizontal"></span>
                              <span className="vertical"></span>
                            </button>
                            تصميم فيديو
                          </div>
                          <input
                            type="checkbox"
                            name="department"
                            id="department"
                          />
                        </div>
                        <div
                          id="video-design"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            {/* <!-- level two of departments list -->*/}

                            <ul className="deps">
                              {/*<!-- programing languages -->*/}

                              <li>
                                <div className="department-header">
                                  <div className="dep_name">
                                    <button
                                      className="accordion-button collapsed"
                                      type="button"
                                      data-bs-toggle="collapse"
                                      data-bs-target="#programing-languages"
                                      aria-expanded="true"
                                      aria-controls="programing-languages"
                                    >
                                      <span className="horizontal"></span>
                                      <span className="vertical"></span>
                                    </button>
                                    لغات البرمجة
                                  </div>
                                  <input
                                    type="checkbox"
                                    name="sub_department"
                                    id="sub_department"
                                  />
                                </div>
                                <div
                                  id="programing-languages"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="headingOne"
                                  data-bs-parent="#accordionExample"
                                >
                                  <div className="accordion-body">
                                    {/*<!-- level three of departments level -->*/}

                                    <ul className="deps">
                                      <li>
                                        <div className="department-header">
                                          <div className="dep_name">
                                            برمجة CSS و HTML
                                          </div>
                                          <input
                                            type="checkbox"
                                            name="sub_sub_department"
                                            id="sub_sub_department"
                                          />
                                        </div>
                                      </li>
                                      <li>
                                        <div className="department-header">
                                          <div className="dep_name">
                                            برمجة PHP
                                          </div>
                                          <input
                                            type="checkbox"
                                            name="sub_sub_department"
                                            id="sub_sub_department"
                                          />
                                        </div>
                                      </li>
                                      <li>
                                        <div className="department-header">
                                          <div className="dep_name">
                                            برمجة بايثون
                                          </div>
                                          <input
                                            type="checkbox"
                                            name="sub_sub_department"
                                            id="sub_sub_department"
                                          />
                                        </div>
                                      </li>
                                      <li>
                                        <div className="department-header">
                                          <div className="dep_name">
                                            برمجة Java و .NET
                                          </div>
                                          <input
                                            type="checkbox"
                                            name="sub_sub_department"
                                            id="sub_sub_department"
                                          />
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                              {/*<!-- wordpress -->*/}

                              <li>
                                <div className="department-header">
                                  <div className="dep_name">
                                    <button
                                      className="accordion-button collapsed"
                                      type="button"
                                      data-bs-toggle="collapse"
                                      data-bs-target="#wordpress"
                                      aria-expanded="true"
                                      aria-controls="wordpress"
                                    >
                                      <span className="horizontal"></span>
                                      <span className="vertical"></span>
                                    </button>
                                    خدمات ووردبريس
                                  </div>
                                  <input
                                    type="checkbox"
                                    name="sub_department"
                                    id="sub_department"
                                  />
                                </div>
                                <div
                                  id="wordpress"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="headingOne"
                                  data-bs-parent="#accordionExample"
                                >
                                  <div className="accordion-body">
                                    {/* <!-- level three of departments level -->*/}

                                    <ul className="deps">
                                      <li>
                                        <div className="department-header">
                                          <div className="dep_name">
                                            برمجة CSS و HTML
                                          </div>
                                          <input
                                            type="checkbox"
                                            name="sub_sub_department"
                                            id="sub_sub_department"
                                          />
                                        </div>
                                      </li>
                                      <li>
                                        <div className="department-header">
                                          <div className="dep_name">
                                            برمجة PHP
                                          </div>
                                          <input
                                            type="checkbox"
                                            name="sub_sub_department"
                                            id="sub_sub_department"
                                          />
                                        </div>
                                      </li>
                                      <li>
                                        <div className="department-header">
                                          <div className="dep_name">
                                            برمجة بايثون
                                          </div>
                                          <input
                                            type="checkbox"
                                            name="sub_sub_department"
                                            id="sub_sub_department"
                                          />
                                        </div>
                                      </li>
                                      <li>
                                        <div className="department-header">
                                          <div className="dep_name">
                                            برمجة Java و .NET
                                          </div>
                                          <input
                                            type="checkbox"
                                            name="sub_sub_department"
                                            id="sub_sub_department"
                                          />
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                              {/* <!-- e-commerce -->*/}

                              <li>
                                <div className="department-header">
                                  <div className="dep_name">
                                    <button
                                      className="accordion-button collapsed"
                                      type="button"
                                      data-bs-toggle="collapse"
                                      data-bs-target="#ecommerce"
                                      aria-expanded="true"
                                      aria-controls="ecommerce"
                                    >
                                      <span className="horizontal"></span>
                                      <span className="vertical"></span>
                                    </button>
                                    تطوير متاجر إلكترونية
                                  </div>
                                  <input
                                    type="checkbox"
                                    name="sub_department"
                                    id="sub_department"
                                  />
                                </div>
                                <div
                                  id="ecommerce"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="headingOne"
                                  data-bs-parent="#accordionExample"
                                >
                                  <div className="accordion-body">
                                    {/*  <!-- level three of departments level -->*/}

                                    <ul className="deps">
                                      <li>
                                        <div className="department-header">
                                          <div className="dep_name">
                                            برمجة CSS و HTML
                                          </div>
                                          <input
                                            type="checkbox"
                                            name="sub_sub_department"
                                            id="sub_sub_department"
                                          />
                                        </div>
                                      </li>
                                      <li>
                                        <div className="department-header">
                                          <div className="dep_name">
                                            برمجة PHP
                                          </div>
                                          <input
                                            type="checkbox"
                                            name="sub_sub_department"
                                            id="sub_sub_department"
                                          />
                                        </div>
                                      </li>
                                      <li>
                                        <div className="department-header">
                                          <div className="dep_name">
                                            برمجة بايثون
                                          </div>
                                          <input
                                            type="checkbox"
                                            name="sub_sub_department"
                                            id="sub_sub_department"
                                          />
                                        </div>
                                      </li>
                                      <li>
                                        <div className="department-header">
                                          <div className="dep_name">
                                            برمجة Java و .NET
                                          </div>
                                          <input
                                            type="checkbox"
                                            name="sub_sub_department"
                                            id="sub_sub_department"
                                          />
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li>

                              {/* <!-- mobile apllication -->*/}

                              <li>
                                <div className="department-header">
                                  <div className="dep_name">
                                    <button
                                      className="accordion-button collapsed"
                                      type="button"
                                      data-bs-toggle="collapse"
                                      data-bs-target="#app-dev"
                                      aria-expanded="true"
                                      aria-controls="app-dev"
                                    >
                                      <span className="horizontal"></span>
                                      <span className="vertical"></span>
                                    </button>
                                    برمجة تطبيقات الجوال
                                  </div>
                                  <input
                                    type="checkbox"
                                    name="sub_department"
                                    id="sub_department"
                                  />
                                </div>
                                <div
                                  id="app-dev"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="headingOne"
                                  data-bs-parent="#accordionExample"
                                >
                                  <div className="accordion-body">
                                    {/* <!-- level three of departments level -->*/}

                                    <ul className="deps">
                                      <li>
                                        <div className="department-header">
                                          <div className="dep_name">
                                            برمجة CSS و HTML
                                          </div>
                                          <input
                                            type="checkbox"
                                            name="sub_sub_department"
                                            id="sub_sub_department"
                                          />
                                        </div>
                                      </li>
                                      <li>
                                        <div className="department-header">
                                          <div className="dep_name">
                                            برمجة PHP
                                          </div>
                                          <input
                                            type="checkbox"
                                            name="sub_sub_department"
                                            id="sub_sub_department"
                                          />
                                        </div>
                                      </li>
                                      <li>
                                        <div className="department-header">
                                          <div className="dep_name">
                                            برمجة بايثون
                                          </div>
                                          <input
                                            type="checkbox"
                                            name="sub_sub_department"
                                            id="sub_sub_department"
                                          />
                                        </div>
                                      </li>
                                      <li>
                                        <div className="department-header">
                                          <div className="dep_name">
                                            برمجة Java و .NET
                                          </div>
                                          <input
                                            type="checkbox"
                                            name="sub_sub_department"
                                            id="sub_sub_department"
                                          />
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>

                      {/* <!-- remote learning department -->*/}

                      <li>
                        <div className="department-header">
                          <div className="dep_name">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#remote-learning"
                              aria-expanded="true"
                              aria-controls="remote-learning"
                            >
                              <span className="horizontal"></span>
                              <span className="vertical"></span>
                            </button>
                            تعليم عن بعد
                          </div>
                          <input
                            type="checkbox"
                            name="department"
                            id="department"
                          />
                        </div>
                        <div
                          id="remote-learning"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            {/* <!-- level two of departments list -->s*/}

                            <ul className="deps">
                              {/*  <!-- programing languages --> */}

                              <li>
                                <div className="department-header">
                                  <div className="dep_name">
                                    <button
                                      className="accordion-button collapsed"
                                      type="button"
                                      data-bs-toggle="collapse"
                                      data-bs-target="#programing-languages"
                                      aria-expanded="true"
                                      aria-controls="programing-languages"
                                    >
                                      <span className="horizontal"></span>
                                      <span className="vertical"></span>
                                    </button>
                                    لغات البرمجة
                                  </div>
                                  <input
                                    type="checkbox"
                                    name="sub_department"
                                    id="sub_department"
                                  />
                                </div>
                                <div
                                  id="programing-languages"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="headingOne"
                                  data-bs-parent="#accordionExample"
                                >
                                  <div className="accordion-body">
                                    {/* <!-- level three of departments level -->*/}

                                    <ul className="deps">
                                      <li>
                                        <div className="department-header">
                                          <div className="dep_name">
                                            برمجة CSS و HTML
                                          </div>
                                          <input
                                            type="checkbox"
                                            name="sub_sub_department"
                                            id="sub_sub_department"
                                          />
                                        </div>
                                      </li>
                                      <li>
                                        <div className="department-header">
                                          <div className="dep_name">
                                            برمجة PHP
                                          </div>
                                          <input
                                            type="checkbox"
                                            name="sub_sub_department"
                                            id="sub_sub_department"
                                          />
                                        </div>
                                      </li>
                                      <li>
                                        <div className="department-header">
                                          <div className="dep_name">
                                            برمجة بايثون
                                          </div>
                                          <input
                                            type="checkbox"
                                            name="sub_sub_department"
                                            id="sub_sub_department"
                                          />
                                        </div>
                                      </li>
                                      <li>
                                        <div className="department-header">
                                          <div className="dep_name">
                                            برمجة Java و .NET
                                          </div>
                                          <input
                                            type="checkbox"
                                            name="sub_sub_department"
                                            id="sub_sub_department"
                                          />
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                              {/* <!-- wordpress -->*/}

                              <li>
                                <div className="department-header">
                                  <div className="dep_name">
                                    <button
                                      className="accordion-button collapsed"
                                      type="button"
                                      data-bs-toggle="collapse"
                                      data-bs-target="#wordpress"
                                      aria-expanded="true"
                                      aria-controls="wordpress"
                                    >
                                      <span className="horizontal"></span>
                                      <span className="vertical"></span>
                                    </button>
                                    خدمات ووردبريس
                                  </div>
                                  <input
                                    type="checkbox"
                                    name="sub_department"
                                    id="sub_department"
                                  />
                                </div>
                                <div
                                  id="wordpress"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="headingOne"
                                  data-bs-parent="#accordionExample"
                                >
                                  <div className="accordion-body">
                                    {/*<!-- level three of departments level --> */}

                                    <ul className="deps">
                                      <li>
                                        <div className="department-header">
                                          <div className="dep_name">
                                            برمجة CSS و HTML
                                          </div>
                                          <input
                                            type="checkbox"
                                            name="sub_sub_department"
                                            id="sub_sub_department"
                                          />
                                        </div>
                                      </li>
                                      <li>
                                        <div className="department-header">
                                          <div className="dep_name">
                                            برمجة PHP
                                          </div>
                                          <input
                                            type="checkbox"
                                            name="sub_sub_department"
                                            id="sub_sub_department"
                                          />
                                        </div>
                                      </li>
                                      <li>
                                        <div className="department-header">
                                          <div className="dep_name">
                                            برمجة بايثون
                                          </div>
                                          <input
                                            type="checkbox"
                                            name="sub_sub_department"
                                            id="sub_sub_department"
                                          />
                                        </div>
                                      </li>
                                      <li>
                                        <div className="department-header">
                                          <div className="dep_name">
                                            برمجة Java و .NET
                                          </div>
                                          <input
                                            type="checkbox"
                                            name="sub_sub_department"
                                            id="sub_sub_department"
                                          />
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                              {/*<!-- e-commerce --> */}

                              <li>
                                <div className="department-header">
                                  <div className="dep_name">
                                    <button
                                      className="accordion-button collapsed"
                                      type="button"
                                      data-bs-toggle="collapse"
                                      data-bs-target="#ecommerce"
                                      aria-expanded="true"
                                      aria-controls="ecommerce"
                                    >
                                      <span className="horizontal"></span>
                                      <span className="vertical"></span>
                                    </button>
                                    تطوير متاجر إلكترونية
                                  </div>
                                  <input
                                    type="checkbox"
                                    name="sub_department"
                                    id="sub_department"
                                  />
                                </div>
                                <div
                                  id="ecommerce"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="headingOne"
                                  data-bs-parent="#accordionExample"
                                >
                                  <div className="accordion-body">
                                    {/*<!-- level three of departments level --> */}

                                    <ul className="deps">
                                      <li>
                                        <div className="department-header">
                                          <div className="dep_name">
                                            برمجة CSS و HTML
                                          </div>
                                          <input
                                            type="checkbox"
                                            name="sub_sub_department"
                                            id="sub_sub_department"
                                          />
                                        </div>
                                      </li>
                                      <li>
                                        <div className="department-header">
                                          <div className="dep_name">
                                            برمجة PHP
                                          </div>
                                          <input
                                            type="checkbox"
                                            name="sub_sub_department"
                                            id="sub_sub_department"
                                          />
                                        </div>
                                      </li>
                                      <li>
                                        <div className="department-header">
                                          <div className="dep_name">
                                            برمجة بايثون
                                          </div>
                                          <input
                                            type="checkbox"
                                            name="sub_sub_department"
                                            id="sub_sub_department"
                                          />
                                        </div>
                                      </li>
                                      <li>
                                        <div className="department-header">
                                          <div className="dep_name">
                                            برمجة Java و .NET
                                          </div>
                                          <input
                                            type="checkbox"
                                            name="sub_sub_department"
                                            id="sub_sub_department"
                                          />
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                              {/* <!-- mobile apllication -->*/}
                              <li>
                                <div className="department-header">
                                  <div className="dep_name">
                                    <button
                                      className="accordion-button collapsed"
                                      type="button"
                                      data-bs-toggle="collapse"
                                      data-bs-target="#app-dev"
                                      aria-expanded="true"
                                      aria-controls="app-dev"
                                    >
                                      <span className="horizontal"></span>
                                      <span className="vertical"></span>
                                    </button>
                                    برمجة تطبيقات الجوال
                                  </div>
                                  <input
                                    type="checkbox"
                                    name="sub_department"
                                    id="sub_department"
                                  />
                                </div>
                                <div
                                  id="app-dev"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="headingOne"
                                  data-bs-parent="#accordionExample"
                                >
                                  <div className="accordion-body">
                                    {/*<!-- level three of departments level --> */}

                                    <ul className="deps">
                                      <li>
                                        <div className="department-header">
                                          <div className="dep_name">
                                            برمجة CSS و HTML
                                          </div>
                                          <input
                                            type="checkbox"
                                            name="sub_sub_department"
                                            id="sub_sub_department"
                                          />
                                        </div>
                                      </li>
                                      <li>
                                        <div className="department-header">
                                          <div className="dep_name">
                                            برمجة PHP
                                          </div>
                                          <input
                                            type="checkbox"
                                            name="sub_sub_department"
                                            id="sub_sub_department"
                                          />
                                        </div>
                                      </li>
                                      <li>
                                        <div className="department-header">
                                          <div className="dep_name">
                                            برمجة بايثون
                                          </div>
                                          <input
                                            type="checkbox"
                                            name="sub_sub_department"
                                            id="sub_sub_department"
                                          />
                                        </div>
                                      </li>
                                      <li>
                                        <div className="department-header">
                                          <div className="dep_name">
                                            برمجة Java و .NET
                                          </div>
                                          <input
                                            type="checkbox"
                                            name="sub_sub_department"
                                            id="sub_sub_department"
                                          />
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>

                      {/* <!-- digital marketing department -->*/}

                      <li>
                        <div className="department-header">
                          <div className="dep_name">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#digital-marketing"
                              aria-expanded="true"
                              aria-controls="digital-marketing"
                            >
                              <span className="horizontal"></span>
                              <span className="vertical"></span>
                            </button>
                            التسويق الإلكتروني
                          </div>
                          <input
                            type="checkbox"
                            name="department"
                            id="department"
                          />
                        </div>
                        <div
                          id="digital-marketing"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            {/* <!-- level two of departments list -->*/}

                            <ul className="deps">
                              {/*  <!-- programing languages -->*/}

                              <li>
                                <div className="department-header">
                                  <div className="dep_name">
                                    <button
                                      className="accordion-button collapsed"
                                      type="button"
                                      data-bs-toggle="collapse"
                                      data-bs-target="#programing-languages"
                                      aria-expanded="true"
                                      aria-controls="programing-languages"
                                    >
                                      <span className="horizontal"></span>
                                      <span className="vertical"></span>
                                    </button>
                                    لغات البرمجة
                                  </div>
                                  <input
                                    type="checkbox"
                                    name="sub_department"
                                    id="sub_department"
                                  />
                                </div>
                                <div
                                  id="programing-languages"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="headingOne"
                                  data-bs-parent="#accordionExample"
                                >
                                  <div className="accordion-body">
                                    {/*<!-- level three of departments level --> */}

                                    <ul className="deps">
                                      <li>
                                        <div className="department-header">
                                          <div className="dep_name">
                                            برمجة CSS و HTML
                                          </div>
                                          <input
                                            type="checkbox"
                                            name="sub_sub_department"
                                            id="sub_sub_department"
                                          />
                                        </div>
                                      </li>
                                      <li>
                                        <div className="department-header">
                                          <div className="dep_name">
                                            برمجة PHP
                                          </div>
                                          <input
                                            type="checkbox"
                                            name="sub_sub_department"
                                            id="sub_sub_department"
                                          />
                                        </div>
                                      </li>
                                      <li>
                                        <div className="department-header">
                                          <div className="dep_name">
                                            برمجة بايثون
                                          </div>
                                          <input
                                            type="checkbox"
                                            name="sub_sub_department"
                                            id="sub_sub_department"
                                          />
                                        </div>
                                      </li>
                                      <li>
                                        <div className="department-header">
                                          <div className="dep_name">
                                            برمجة Java و .NET
                                          </div>
                                          <input
                                            type="checkbox"
                                            name="sub_sub_department"
                                            id="sub_sub_department"
                                          />
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                              {/* <!-- wordpress -->*/}

                              <li>
                                <div className="department-header">
                                  <div className="dep_name">
                                    <button
                                      className="accordion-button collapsed"
                                      type="button"
                                      data-bs-toggle="collapse"
                                      data-bs-target="#wordpress"
                                      aria-expanded="true"
                                      aria-controls="wordpress"
                                    >
                                      <span className="horizontal"></span>
                                      <span className="vertical"></span>
                                    </button>
                                    خدمات ووردبريس
                                  </div>
                                  <input
                                    type="checkbox"
                                    name="sub_department"
                                    id="sub_department"
                                  />
                                </div>
                                <div
                                  id="wordpress"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="headingOne"
                                  data-bs-parent="#accordionExample"
                                >
                                  <div className="accordion-body">
                                    {/* <!-- level three of departments level -->*/}

                                    <ul className="deps">
                                      <li>
                                        <div className="department-header">
                                          <div className="dep_name">
                                            برمجة CSS و HTML
                                          </div>
                                          <input
                                            type="checkbox"
                                            name="sub_sub_department"
                                            id="sub_sub_department"
                                          />
                                        </div>
                                      </li>
                                      <li>
                                        <div className="department-header">
                                          <div className="dep_name">
                                            برمجة PHP
                                          </div>
                                          <input
                                            type="checkbox"
                                            name="sub_sub_department"
                                            id="sub_sub_department"
                                          />
                                        </div>
                                      </li>
                                      <li>
                                        <div className="department-header">
                                          <div className="dep_name">
                                            برمجة بايثون
                                          </div>
                                          <input
                                            type="checkbox"
                                            name="sub_sub_department"
                                            id="sub_sub_department"
                                          />
                                        </div>
                                      </li>
                                      <li>
                                        <div className="department-header">
                                          <div className="dep_name">
                                            برمجة Java و .NET
                                          </div>
                                          <input
                                            type="checkbox"
                                            name="sub_sub_department"
                                            id="sub_sub_department"
                                          />
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                              {/*<!-- e-commerce --> */}

                              <li>
                                <div className="department-header">
                                  <div className="dep_name">
                                    <button
                                      className="accordion-button collapsed"
                                      type="button"
                                      data-bs-toggle="collapse"
                                      data-bs-target="#ecommerce"
                                      aria-expanded="true"
                                      aria-controls="ecommerce"
                                    >
                                      <span className="horizontal"></span>
                                      <span className="vertical"></span>
                                    </button>
                                    تطوير متاجر إلكترونية
                                  </div>
                                  <input
                                    type="checkbox"
                                    name="sub_department"
                                    id="sub_department"
                                  />
                                </div>
                                <div
                                  id="ecommerce"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="headingOne"
                                  data-bs-parent="#accordionExample"
                                >
                                  <div className="accordion-body">
                                    {/* <!-- level three of departments level -->*/}

                                    <ul className="deps">
                                      <li>
                                        <div className="department-header">
                                          <div className="dep_name">
                                            برمجة CSS و HTML
                                          </div>
                                          <input
                                            type="checkbox"
                                            name="sub_sub_department"
                                            id="sub_sub_department"
                                          />
                                        </div>
                                      </li>
                                      <li>
                                        <div className="department-header">
                                          <div className="dep_name">
                                            برمجة PHP
                                          </div>
                                          <input
                                            type="checkbox"
                                            name="sub_sub_department"
                                            id="sub_sub_department"
                                          />
                                        </div>
                                      </li>
                                      <li>
                                        <div className="department-header">
                                          <div className="dep_name">
                                            برمجة بايثون
                                          </div>
                                          <input
                                            type="checkbox"
                                            name="sub_sub_department"
                                            id="sub_sub_department"
                                          />
                                        </div>
                                      </li>
                                      <li>
                                        <div className="department-header">
                                          <div className="dep_name">
                                            برمجة Java و .NET
                                          </div>
                                          <input
                                            type="checkbox"
                                            name="sub_sub_department"
                                            id="sub_sub_department"
                                          />
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li>

                              {/* <!-- mobile apllication -->*/}

                              <li>
                                <div className="department-header">
                                  <div className="dep_name">
                                    <button
                                      className="accordion-button collapsed"
                                      type="button"
                                      data-bs-toggle="collapse"
                                      data-bs-target="#app-dev"
                                      aria-expanded="true"
                                      aria-controls="app-dev"
                                    >
                                      <span className="horizontal"></span>
                                      <span className="vertical"></span>
                                    </button>
                                    برمجة تطبيقات الجوال
                                  </div>
                                  <input
                                    type="checkbox"
                                    name="sub_department"
                                    id="sub_department"
                                  />
                                </div>
                                <div
                                  id="app-dev"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="headingOne"
                                  data-bs-parent="#accordionExample"
                                >
                                  <div className="accordion-body">
                                    {/* <!-- level three of departments level -->
                                     */}
                                    <ul className="deps">
                                      <li>
                                        <div className="department-header">
                                          <div className="dep_name">
                                            برمجة CSS و HTML
                                          </div>
                                          <input
                                            type="checkbox"
                                            name="sub_sub_department"
                                            id="sub_sub_department"
                                          />
                                        </div>
                                      </li>
                                      <li>
                                        <div className="department-header">
                                          <div className="dep_name">
                                            برمجة PHP
                                          </div>
                                          <input
                                            type="checkbox"
                                            name="sub_sub_department"
                                            id="sub_sub_department"
                                          />
                                        </div>
                                      </li>
                                      <li>
                                        <div className="department-header">
                                          <div className="dep_name">
                                            برمجة بايثون
                                          </div>
                                          <input
                                            type="checkbox"
                                            name="sub_sub_department"
                                            id="sub_sub_department"
                                          />
                                        </div>
                                      </li>
                                      <li>
                                        <div className="department-header">
                                          <div className="dep_name">
                                            برمجة Java و .NET
                                          </div>
                                          <input
                                            type="checkbox"
                                            name="sub_sub_department"
                                            id="sub_sub_department"
                                          />
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>

                      {/*<!-- project managemnet department --> */}

                      <li>
                        <div className="department-header">
                          <div className="dep_name">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#works"
                              aria-expanded="true"
                              aria-controls="works"
                            >
                              <span className="horizontal"></span>
                              <span className="vertical"></span>
                            </button>
                            أعمال
                          </div>
                          <input
                            type="checkbox"
                            name="department"
                            id="department"
                          />
                        </div>
                        <div
                          id="works"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            {/* <!-- level two of departments list -->*/}
                            <ul className="deps">
                              {/* -- programing languages -->*/}

                              <li>
                                <div className="department-header">
                                  <div className="dep_name">
                                    <button
                                      className="accordion-button collapsed"
                                      type="button"
                                      data-bs-toggle="collapse"
                                      data-bs-target="#programing-languages"
                                      aria-expanded="true"
                                      aria-controls="programing-languages"
                                    >
                                      <span className="horizontal"></span>
                                      <span className="vertical"></span>
                                    </button>
                                    لغات البرمجة
                                  </div>
                                  <input
                                    type="checkbox"
                                    name="sub_department"
                                    id="sub_department"
                                  />
                                </div>
                                <div
                                  id="programing-languages"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="headingOne"
                                  data-bs-parent="#accordionExample"
                                >
                                  <div className="accordion-body">
                                    {/*<!-- level three of departments level --> */}

                                    <ul className="deps">
                                      <li>
                                        <div className="department-header">
                                          <div className="dep_name">
                                            برمجة CSS و HTML
                                          </div>
                                          <input
                                            type="checkbox"
                                            name="sub_sub_department"
                                            id="sub_sub_department"
                                          />
                                        </div>
                                      </li>
                                      <li>
                                        <div className="department-header">
                                          <div className="dep_name">
                                            برمجة PHP
                                          </div>
                                          <input
                                            type="checkbox"
                                            name="sub_sub_department"
                                            id="sub_sub_department"
                                          />
                                        </div>
                                      </li>
                                      <li>
                                        <div className="department-header">
                                          <div className="dep_name">
                                            برمجة بايثون
                                          </div>
                                          <input
                                            type="checkbox"
                                            name="sub_sub_department"
                                            id="sub_sub_department"
                                          />
                                        </div>
                                      </li>
                                      <li>
                                        <div className="department-header">
                                          <div className="dep_name">
                                            برمجة Java و .NET
                                          </div>
                                          <input
                                            type="checkbox"
                                            name="sub_sub_department"
                                            id="sub_sub_department"
                                          />
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li>

                              {/* <!-- wordpress -->*/}

                              <li>
                                <div className="department-header">
                                  <div className="dep_name">
                                    <button
                                      className="accordion-button collapsed"
                                      type="button"
                                      data-bs-toggle="collapse"
                                      data-bs-target="#wordpress"
                                      aria-expanded="true"
                                      aria-controls="wordpress"
                                    >
                                      <span className="horizontal"></span>
                                      <span className="vertical"></span>
                                    </button>
                                    خدمات ووردبريس
                                  </div>
                                  <input
                                    type="checkbox"
                                    name="sub_department"
                                    id="sub_department"
                                  />
                                </div>
                                <div
                                  id="wordpress"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="headingOne"
                                  data-bs-parent="#accordionExample"
                                >
                                  <div className="accordion-body">
                                    {/* <!-- level three of departments level -->*/}

                                    <ul className="deps">
                                      <li>
                                        <div className="department-header">
                                          <div className="dep_name">
                                            برمجة CSS و HTML
                                          </div>
                                          <input
                                            type="checkbox"
                                            name="sub_sub_department"
                                            id="sub_sub_department"
                                          />
                                        </div>
                                      </li>
                                      <li>
                                        <div className="department-header">
                                          <div className="dep_name">
                                            برمجة PHP
                                          </div>
                                          <input
                                            type="checkbox"
                                            name="sub_sub_department"
                                            id="sub_sub_department"
                                          />
                                        </div>
                                      </li>
                                      <li>
                                        <div className="department-header">
                                          <div className="dep_name">
                                            برمجة بايثون
                                          </div>
                                          <input
                                            type="checkbox"
                                            name="sub_sub_department"
                                            id="sub_sub_department"
                                          />
                                        </div>
                                      </li>
                                      <li>
                                        <div className="department-header">
                                          <div className="dep_name">
                                            برمجة Java و .NET
                                          </div>
                                          <input
                                            type="checkbox"
                                            name="sub_sub_department"
                                            id="sub_sub_department"
                                          />
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                              {/*<!-- e-commerce --> */}

                              <li>
                                <div className="department-header">
                                  <div className="dep_name">
                                    <button
                                      className="accordion-button collapsed"
                                      type="button"
                                      data-bs-toggle="collapse"
                                      data-bs-target="#ecommerce"
                                      aria-expanded="true"
                                      aria-controls="ecommerce"
                                    >
                                      <span className="horizontal"></span>
                                      <span className="vertical"></span>
                                    </button>
                                    تطوير متاجر إلكترونية
                                  </div>
                                  <input
                                    type="checkbox"
                                    name="sub_department"
                                    id="sub_department"
                                  />
                                </div>
                                <div
                                  id="ecommerce"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="headingOne"
                                  data-bs-parent="#accordionExample"
                                >
                                  <div className="accordion-body">
                                    {/* !-- level three of departments level -->*/}

                                    <ul className="deps">
                                      <li>
                                        <div className="department-header">
                                          <div className="dep_name">
                                            برمجة CSS و HTML
                                          </div>
                                          <input
                                            type="checkbox"
                                            name="sub_sub_department"
                                            id="sub_sub_department"
                                          />
                                        </div>
                                      </li>
                                      <li>
                                        <div className="department-header">
                                          <div className="dep_name">
                                            برمجة PHP
                                          </div>
                                          <input
                                            type="checkbox"
                                            name="sub_sub_department"
                                            id="sub_sub_department"
                                          />
                                        </div>
                                      </li>
                                      <li>
                                        <div className="department-header">
                                          <div className="dep_name">
                                            برمجة بايثون
                                          </div>
                                          <input
                                            type="checkbox"
                                            name="sub_sub_department"
                                            id="sub_sub_department"
                                          />
                                        </div>
                                      </li>
                                      <li>
                                        <div className="department-header">
                                          <div className="dep_name">
                                            برمجة Java و .NET
                                          </div>
                                          <input
                                            type="checkbox"
                                            name="sub_sub_department"
                                            id="sub_sub_department"
                                          />
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                              {/*<!-- mobile apllication -->*/}
                              <li>
                                <div className="department-header">
                                  <div className="dep_name">
                                    <button
                                      className="accordion-button collapsed"
                                      type="button"
                                      data-bs-toggle="collapse"
                                      data-bs-target="#app-dev"
                                      aria-expanded="true"
                                      aria-controls="app-dev"
                                    >
                                      <span className="horizontal"></span>
                                      <span className="vertical"></span>
                                    </button>
                                    برمجة تطبيقات الجوال
                                  </div>
                                  <input
                                    type="checkbox"
                                    name="sub_department"
                                    id="sub_department"
                                  />
                                </div>
                                <div
                                  id="app-dev"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="headingOne"
                                  data-bs-parent="#accordionExample"
                                >
                                  <div className="accordion-body">
                                    {/* <!-- level three of departments level -->*/}

                                    <ul className="deps">
                                      <li>
                                        <div className="department-header">
                                          <div className="dep_name">
                                            برمجة CSS و HTML
                                          </div>
                                          <input
                                            type="checkbox"
                                            name="sub_sub_department"
                                            id="sub_sub_department"
                                          />
                                        </div>
                                      </li>
                                      <li>
                                        <div className="department-header">
                                          <div className="dep_name">
                                            برمجة PHP
                                          </div>
                                          <input
                                            type="checkbox"
                                            name="sub_sub_department"
                                            id="sub_sub_department"
                                          />
                                        </div>
                                      </li>
                                      <li>
                                        <div className="department-header">
                                          <div className="dep_name">
                                            برمجة بايثون
                                          </div>
                                          <input
                                            type="checkbox"
                                            name="sub_sub_department"
                                            id="sub_sub_department"
                                          />
                                        </div>
                                      </li>
                                      <li>
                                        <div className="department-header">
                                          <div className="dep_name">
                                            برمجة Java و .NET
                                          </div>
                                          <input
                                            type="checkbox"
                                            name="sub_sub_department"
                                            id="sub_sub_department"
                                          />
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/*<!-- filter by rate_range --> */}

                  <ul className="rate-range">
                    <h6>تقييم الخدمة</h6>
                    <li>
                      <input
                        type="radio"
                        name="rate-range"
                        id="rate-range"
                        checked
                      />
                      <ul className="stars">
                        <li className="star">
                          <i className="fa-solid fa-star"></i>
                        </li>
                        <li className="star">
                          <i className="fa-solid fa-star"></i>
                        </li>
                        <li className="star">
                          <i className="fa-solid fa-star"></i>
                        </li>
                        <li className="star">
                          <i className="fa-solid fa-star"></i>
                        </li>
                        <li className="star">
                          <i className="fa-solid fa-star"></i>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <input type="radio" name="rate-range" id="rate-range" />

                      <ul className="stars">
                        <li className="star">
                          <i className="fa-solid fa-star"></i>
                        </li>
                        <li className="star">
                          <i className="fa-solid fa-star"></i>
                        </li>
                        <li className="star">
                          <i className="fa-solid fa-star"></i>
                        </li>
                        <li className="star">
                          <i className="fa-solid fa-star"></i>
                        </li>
                        <li>
                          <i className="fa-solid fa-star"></i>
                        </li>
                      </ul>
                      <span>او اكثر</span>
                    </li>
                    <li>
                      <input type="radio" name="rate-range" id="rate-range" />
                      <ul className="stars">
                        <li className="star">
                          <i className="fa-solid fa-star"></i>
                        </li>
                        <li className="star">
                          <i className="fa-solid fa-star"></i>
                        </li>
                        <li className="star">
                          <i className="fa-solid fa-star"></i>
                        </li>
                        <li>
                          <i className="fa-solid fa-star"></i>
                        </li>
                        <li>
                          <i className="fa-solid fa-star"></i>
                        </li>
                      </ul>
                      <span>او اكثر</span>
                    </li>
                    <li>
                      <input type="radio" name="rate-range" id="rate-range" />
                      <ul className="stars">
                        <li className="star">
                          <i className="fa-solid fa-star"></i>
                        </li>
                        <li className="star">
                          <i className="fa-solid fa-star"></i>
                        </li>
                        <li>
                          <i className="fa-solid fa-star"></i>
                        </li>
                        <li>
                          <i className="fa-solid fa-star"></i>
                        </li>
                        <li>
                          <i className="fa-solid fa-star"></i>
                        </li>
                      </ul>
                      <span>او اكثر</span>
                    </li>
                    <li>
                      <input type="radio" name="rate-range" id="rate-range" />
                      <ul className="stars">
                        <li className="star">
                          <i className="fa-solid fa-star"></i>
                        </li>
                        <li>
                          <i className="fa-solid fa-star"></i>
                        </li>
                        <li>
                          <i className="fa-solid fa-star"></i>
                        </li>
                        <li>
                          <i className="fa-solid fa-star"></i>
                        </li>
                        <li>
                          <i className="fa-solid fa-star"></i>
                        </li>
                      </ul>
                      <span>او اكثر</span>
                    </li>
                  </ul>
                  {/* <!-- filter by seller_level -->*/}

                  <ul className="seller-level">
                    <h6>مستوى البائع</h6>
                    <ul>
                      <li>
                        <input type="checkbox" id="featured-seller" checked />
                        <label htmlFor="featured-seller">بائع مميز</label>
                      </li>
                      <li>
                        <input type="checkbox" id="active-seller" />
                        <label htmlFor="active-seller">بائع نشيط</label>
                      </li>
                      <li>
                        <input type="checkbox" id="new-seller" />
                        <label htmlFor="new-seller">بائع جديد</label>
                      </li>
                    </ul>
                  </ul>
                  {/*<!-- filter by seller_status --> */}

                  <ul className="seller-level">
                    <h6>حالة البائع</h6>
                    <ul>
                      <li>
                        <input type="checkbox" id="verified-seller" checked />
                        <label htmlFor="verified-seller">هوية موثقة</label>
                      </li>
                      <li>
                        <input type="checkbox" id="available-seller" />
                        <label htmlFor="available-seller">متواجد حالياً</label>
                      </li>
                    </ul>
                  </ul>
                </form>
              </div>
            </aside>
            <div className="small-filter-header">
              <h6>نتائج البحث</h6>
              <button className="openfilter">
                <i className="fa-light fa-sliders"></i>
              </button>
            </div>
            <div className="col-lg-9 col-12 p-2 results-wrapper">
              <div className="container">
                <div className="row">
                  {/*<!-- service -->*/}

                  <div className="col-lg-4 col-6 mb-4">
                    <div className="service-card">
                      <Link to="/services" className="img">
                        <img src={bann} alt="" />
                      </Link>
                      <div className="content">
                        <h6>اصنع لك تطبيق متجر الكتروني باستخدام flutter...</h6>
                        <p>
                          <Link to="#!">برمجة وتطوير</Link> /
                          <span>إنشاء تطبيق</span>
                        </p>
                        <div className="d-flex gap-3">
                          <div className="rate">
                            <ul>
                              <li className="star">
                                <i className="fa-solid fa-star"></i>
                              </li>
                              <li className="star">
                                <i className="fa-solid fa-star"></i>
                              </li>
                              <li className="star">
                                <i className="fa-solid fa-star"></i>
                              </li>
                              <li className="star">
                                <i className="fa-solid fa-star"></i>
                              </li>
                              <li>
                                <i className="fa-solid fa-star"></i>
                              </li>
                            </ul>
                          </div>
                          <span className="sell-count">( 4 )</span>
                        </div>
                        <h6 className="start-from">
                          تبدأ من : <b>10.00$</b>
                        </h6>
                      </div>
                    </div>
                  </div>
                  {/*<!-- service -->*/}

                  <div className="col-lg-4 col-6 mb-4">
                    <div className="service-card">
                      <Link to="/services" className="img">
                        <img src={bann} alt="" />
                      </Link>
                      <div className="content">
                        <h6>اصنع لك تطبيق متجر الكتروني باستخدام flutter...</h6>
                        <p>
                          <Link to="#!">برمجة وتطوير</Link> /
                          <span>إنشاء تطبيق</span>
                        </p>
                        <div className="d-flex gap-3">
                          <div className="rate">
                            <ul>
                              <li className="star">
                                <i className="fa-solid fa-star"></i>
                              </li>
                              <li className="star">
                                <i className="fa-solid fa-star"></i>
                              </li>
                              <li className="star">
                                <i className="fa-solid fa-star"></i>
                              </li>
                              <li className="star">
                                <i className="fa-solid fa-star"></i>
                              </li>
                              <li>
                                <i className="fa-solid fa-star"></i>
                              </li>
                            </ul>
                          </div>
                          <span className="sell-count">( 4 )</span>
                        </div>
                        <h6 className="start-from">
                          تبدأ من : <b>10.00$</b>
                        </h6>
                      </div>
                    </div>
                  </div>

                  {/*<!-- service --> */}

                  <div className="col-lg-4 col-6 mb-4">
                    <div className="service-card">
                      <Link to="/services" className="img">
                        <img src={bann} alt="" />
                      </Link>
                      <div className="content">
                        <h6>اصنع لك تطبيق متجر الكتروني باستخدام flutter...</h6>
                        <p>
                          <Link to="#!">برمجة وتطوير</Link> /
                          <span>إنشاء تطبيق</span>
                        </p>
                        <div className="d-flex gap-3">
                          <div className="rate">
                            <ul>
                              <li className="star">
                                <i className="fa-solid fa-star"></i>
                              </li>
                              <li className="star">
                                <i className="fa-solid fa-star"></i>
                              </li>
                              <li className="star">
                                <i className="fa-solid fa-star"></i>
                              </li>
                              <li className="star">
                                <i className="fa-solid fa-star"></i>
                              </li>
                              <li>
                                <i className="fa-solid fa-star"></i>
                              </li>
                            </ul>
                          </div>
                          <span className="sell-count">( 4 )</span>
                        </div>
                        <h6 className="start-from">
                          تبدأ من : <b>10.00$</b>
                        </h6>
                      </div>
                    </div>
                  </div>

                  {/*<!-- service --> */}
                  <div className="col-lg-4 col-6 mb-4">
                    <div className="service-card">
                      <Link to="/services" className="img">
                        <img src={bann} alt="" />
                      </Link>
                      <div className="content">
                        <h6>اصنع لك تطبيق متجر الكتروني باستخدام flutter...</h6>
                        <p>
                          <Link to="#!">برمجة وتطوير</Link> /
                          <span>إنشاء تطبيق</span>
                        </p>
                        <div className="d-flex gap-3">
                          <div className="rate">
                            <ul>
                              <li className="star">
                                <i className="fa-solid fa-star"></i>
                              </li>
                              <li className="star">
                                <i className="fa-solid fa-star"></i>
                              </li>
                              <li className="star">
                                <i className="fa-solid fa-star"></i>
                              </li>
                              <li className="star">
                                <i className="fa-solid fa-star"></i>
                              </li>
                              <li>
                                <i className="fa-solid fa-star"></i>
                              </li>
                            </ul>
                          </div>
                          <span className="sell-count">( 4 )</span>
                        </div>
                        <h6 className="start-from">
                          تبدأ من : <b>10.00$</b>
                        </h6>
                      </div>
                    </div>
                  </div>
                  {/*!-- service --> */}
                  <div className="col-lg-4 col-6 mb-4">
                    <div className="service-card">
                      <Link to="Services" className="img">
                        <img src={bann} alt="" />
                      </Link>
                      <div className="content">
                        <h6>اصنع لك تطبيق متجر الكتروني باستخدام flutter...</h6>
                        <p>
                          <Link to="#!">برمجة وتطوير</Link> /
                          <span>إنشاء تطبيق</span>
                        </p>
                        <div className="d-flex gap-3">
                          <div className="rate">
                            <ul>
                              <li className="star">
                                <i className="fa-solid fa-star"></i>
                              </li>
                              <li className="star">
                                <i className="fa-solid fa-star"></i>
                              </li>
                              <li className="star">
                                <i className="fa-solid fa-star"></i>
                              </li>
                              <li className="star">
                                <i className="fa-solid fa-star"></i>
                              </li>
                              <li>
                                <i className="fa-solid fa-star"></i>
                              </li>
                            </ul>
                          </div>
                          <span className="sell-count">( 4 )</span>
                        </div>
                        <h6 className="start-from">
                          تبدأ من : <b>10.00$</b>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Search;
