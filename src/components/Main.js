import Date from "./Date"

const Main = ({dates}) => {
  return (
    <div class="row py-5 border-bottom ">
      <div class="col-md-7 pX-4 max-h-screen overflow-auto container">
        <div class="row border-bottom mx-1">
          <div class="col-md-10 px-0">
            <h4 class="fw-bold">Online experience hosted by Petz</h4>
            <p>75 mins · Hosted in English and Thai</p>
          </div>
          <div class="col px-0">
            <img src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" width="60" height="60" class="rounded-circle" alt="profile" />
          </div>
        </div>
        <div class="pb-2 border-bottom">
          <div class="my-2">
            <h5 class="fw-bold mb-0"><i class="fab fa-chromecast me-2"></i>Join online</h5>
            <p class="text-muted mx-4 fs-7">Meet your host live on Zoom.</p>
          </div>

          <div class="my-2">
            <h5 class="fw-bold mb-0"><i class="fas fa-users me-2"></i>Up to 35 people</h5>
            <p class="text-muted mx-4 fs-7">Private groups available for up to 30.</p>
          </div>
        </div>

        <div class="py-5 border-bottom">
          <h4 class="fw-bold">What you'll do</h4>
          <p>We need at least 2 guests to start our experience. If you are not sure whether you are the only person or not. Please send us message to ask before you apply. Thank you.</p>
          <p>Sit down for a conversation about gender identity. The Kratoey, or Ladyboys, are a cultural draw in Thailand. While they’re mainly known for their dance shows, this is your chance to sit down with a local Ladyboy and discuss gender identity and the country’s transgender community.</p>
          <p>I will start with briefing the history of transgender in Thailand. When I was growing up. We were not accepted transgender like nowadays. There were many movements which included one of the first popular Thai movie that made more than 100 million baht in revenue(Trans movie available on Netflix). After that things had changed. And now our level of acceptance of transgender is on the top of the world. Many more detail to share in our first 30mins session.</p>
          <p>Then my co host(Khun Jah) will share her life story that she has passed through since old time until now. You could ask any question during our conversation. Following the discussion, we can talk further.</p>
          <p>And I will share more information to you plus asking for idea to make our transgender museum in the future.
          Other things to note <br />
          You could check my face to face experience to get some ideas. <br /> https://abnb.me/II5KyjyRtR?user_id=183624899&s=50</p>
        </div>

        <div class="py-5 border-bottom">
          <h4 class="fw-bold">How to participate</h4>

          <div class="card-group">
            <div class=" mx-2 col-md-4 border rounded-4">
              
              <div class="card-body fs-7">
                <h4><i class="fas fa-laptop"></i></h4>
                <h6 class="card-title fw-bold">Join a video call</h6>
                <p class="card-text">Use Zoom to participate on your desktop or mobile device. After you book you’ll receive an email with a link and details on how to join.</p>
                <p>
                  <a href="/show" class="text-dark fw-bold">Show more</a>
                </p>
              </div>
            </div>
            <div class="col-md-4 mx-2 border rounded-4">
              
              <div class="card-body fs-7">
                <h4><i class="fas fa-users"></i></h4>
                <h6 class="card-title fw-bold">Book a private group</h6>
                <p class="card-text">Petz can host private groups of any size, up to 30 guests. Private group rates start at $94.</p>
              </div>
            </div>
          </div>

          
        </div>
        <div class="py-5 border-bottom">
          <h4 class="fw-bold">What to bring</h4>
          <ul class="px-0">
            <li class="ticks my-1"><i class="far fa-check-circle"></i> paper note</li>
            <li class="ticks my-1"><i class="far fa-check-circle"></i> Pen</li>
            <li class="ticks my-1"><i class="far fa-check-circle"></i> A lot and any kind of questions please ^_^</li>
          </ul>
        </div>

        <div class="py-5">
          <div class="card border-0 mb-3" style={{style:"max-width: 540px;"}}>
            <div class="row g-0">
              <div class="col-md-1 py-3">
                <img src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" width="60" height="60" class="rounded-circle" alt="profile"/>
              </div>
              <div class="col mx-2">
                <div class="card-body">
                  <h5 class="card-title mb-0 fw-bold">Meet your host, Petz</h5>
                  <p class="card-text"><small class="text-muted">Host on Airbnb since 2018</small></p>
                </div>
              </div>
            </div>
            <div class="d-flex">
              <p><i class="fas fa-star text-danger me-2"></i>69 Reviews <i class="fas fa-shield-alt text-danger mx-2"></i>Identity verified</p>
              
            </div>
            <div>
              <p>Hello good friends around the world ,</p>
              <p>My name is Petz. I started hosting "The Iron lady" experience on Airbnb since November 2018. It began with many of my guests knew that "The Ladyboy", or transgender woman, is widely known and well-integrated in Thai society.
              </p>
              <p>However, none of them know that they weren’t accepted at all until 20 years ago. I personally grew up with friends who later decided to undergo the transgender process, which inspired me to create this experience and share stories.</p>
              <div class="row">
                <div class="col">
                  <button class="btn-outline py-3 px-4">Contact Host</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-5 ">
        <div class="rounded-4 card shadow p-3 shadow">
          <h4 class="card-title mb-0">From $10/ person</h4>
          <small><a href="/show" class="text-dark text-muted">Show all prices</a></small>
          {dates.map((date) => (
            <Date key="id" date={date}></Date>
          ))}
          
          
          
          <div class="text-center">
            <button class="form-control btn-outline border-dark my-2">See more dates</button>
            <a href="/show" class="text-dark fw-bold ">Gift this experience</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
