import React from "react";
import "../styles/Error.css";
import Layout from "../components/Layout/Layout";

export default function Error() {
  return (
    <Layout title={"Oops!!"}>
      <div>
        <section className="page_404">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 ">
                <div className="col-sm-10 col-sm-offset-1  text-center">
                  <div className="four_zero_four_bg" />
                  <div className="contant_box_404">
                    <h3 className="h2">Look like you're lost</h3>
                    <p className="err-para">the page you are looking for not avaible!</p>
                    <a href="/" className="link_404">
                      Go to Home
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
