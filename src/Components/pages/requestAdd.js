import React from 'react'
import SectionHead from './SectionHead'

const RequestAdd = () => {

  return (
        <main className="main">
        <div className="section-head">
        <SectionHead />        
        </div>
        <section className="addRequest">
            <div className="container">
                <form action="request-details.html">
                    <div className="input-field mb-4">
                        <label for="service-name">
                            عنوان الموضوع
                        </label>
                        <input type="text" id="service-name" name="service-name" placeholder="اكتب هنا" />
                    </div>
                    <div className="input-field mb-4">
                        <label for="info-for-customer">
                            محتوى الموضوع
                        </label>
                        <textarea name="info-for-customer" id="info-for-customer" placeholder="اكتب هنا"></textarea>
                    </div>
                    <div className="input-field  mb-2 flex-row gap-4 ps-3 ">
                        <input type="checkbox" id="terms" name=""  className="bg-transparent p-0 w-auto h-auto" />
                        <label for="terms">
                            راجعت محتوى الموضوع بدقة وهو لا يخالف <a href="#!"> الشروط والاحكام </a>
                        </label>
                    </div>
                    <div className="input-field  mb-2 flex-row gap-4 ps-3 ">
                        <input type="checkbox" id="searchInWeb" name=""  className="bg-transparent p-0 w-auto h-auto" />
                        <label for="searchInWeb">
                            بحثت عن الخدمات المعروضة في الموقع قبل كتابة هذا الموضوع
                        </label>
                    </div>

                    <div className="d-flex justify-content-center py-4">
                        <button type="submit" className="btn btn-success px-5"> نشر </button>

                    </div>
                </form>
            </div>
        </section>
    </main>

  )
}

export default RequestAdd