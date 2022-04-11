const Team = () => {
  return (
    <div class="container mt-100 mt-60">
      <div class="row">
        <div class="col-12 text-center">
          <div class="section-title">
            <h4 class="title mb-4">Our Creative Minds</h4>
            <p class="text-muted para-desc mx-auto mb-0">
              Meet the team, who contributed to the development of this Earthquake prediction system
            </p>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
          <div class="mt-4 pt-2">
            <div class="team position-relative d-block text-center">
              <div class="image position-relative d-block overflow-hidden">
                <img
                  src="./assets/dhrumil.png"
                  class="img-fluid avatar avatar-medium shadow rounded-pill"
                  alt=""
                />
                <div class="overlay rounded bg-dark"></div>
              </div>
              <div class="content py-2 member-position bg-white border-bottom overflow-hidden rounded d-inline-block">
                <h4 class="title mb-0">Dhrumil Shah</h4>
                <small class="text-muted">Developer</small>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
          <div class="mt-4 pt-2">
            <div class="team position-relative d-block text-center">
              <div class="image position-relative d-block overflow-hidden">
                <img
                  src="./assets/Yash.png"
                  class="img-fluid avatar avatar-medium shadow rounded-pill"
                  alt=""
                />
                <div class="overlay rounded bg-dark"></div>
              </div>
              <div class="content py-2 member-position bg-white border-bottom overflow-hidden rounded d-inline-block">
                <h4 class="title mb-0">Yash Sankpal</h4>
                <small class="text-muted">Developer</small>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-12 mt-4 pt-2">
          <div class="mt-4 pt-2">
            <div class="team position-relative d-block text-center">
              <div class="image position-relative d-block overflow-hidden">
                <img
                  src="./assets/varad.png"
                  class="img-fluid avatar avatar-medium shadow rounded-pill"
                  alt=""
                />
                <div class="overlay rounded bg-dark"></div>
              </div>
              <div class="content py-2 member-position bg-white border-bottom overflow-hidden rounded d-inline-block">
                <h4 class="title mb-0">Varad Patil</h4>
                <small class="text-muted">Developer</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Team;
