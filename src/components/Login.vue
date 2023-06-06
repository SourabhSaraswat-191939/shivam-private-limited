<template>
  <div class="container-fluid">
    <!-- <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse justify-content-between" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About Us</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/services" class="nav-link">Services</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/gallery" class="nav-link">Gallery</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link">Contact Us</router-link>
          </li>
        </ul>

        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/help" class="nav-link">Help</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>  -->
     <nav class="navbar navbar-expand-lg navbar-light fixed-top">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <!-- <ul class="navbar-nav mr-auto mx-5">
          <li class="nav-item">
            <a class="nav-link" href="#">About Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Gallery</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Help</a>
          </li>
        </ul> -->
        <div class="navbar-nav mr-auto mx-5">
        <button type="button" class="btn btn-primary me-3">
          About Us
        </button>
        <button type="button" class="btn btn-primary me-3">
          Services
        </button>
        <button type="button" class="btn btn-primary me-3">
          Gallery
        </button>
        <button type="button" class="btn btn-primary me-3">
          Contact Us
        </button>
        <button type="button" class="btn btn-primary me-3">
          Sign up for free
        </button>
      </div>
        
      </div>
    </nav>
    
    <div class="row">
        <div class="login-form">
          <h2 class="text-dark mb-3">Login</h2>
          <form>
            <div class="form-group row">
              <label for="username" class="col-sm-3 col-form-label text-dark">Username:</label>
              <div class="col-sm-9">
                <input type="text" v-model="email" class="form-control" id="username" placeholder="Enter your username">
              </div>
            </div>
            <div class="form-group row">
              <label for="password" class="col-sm-3 col-form-label text-dark">Password:</label>
              <div class="col-sm-9">
                <input type="password" v-model="password" class="form-control" id="password" placeholder="Enter your password">
              </div>
            </div>
            <div class="form-group row">
              <div class="col-sm-10 offset-sm-1">
                <div class="button-container">
                  <button type="submit" class="btn btn-primary" @click="login">Login</button>
                  <button type="button" class="btn btn-primary" @click="clear">Clear</button>
                </div>
              </div>
            </div>
          </form>
        </div>
    </div>
    
    <div class="company-info">
      <h1>Shivam Seatrans Private Limited</h1>
      <p>office no. C/103 Kutch Arcade Platinum, Gandhidham - Kutch - Gujarat - 370240 </p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'LoginComp',
  data(){
    return{
      email: '',
      password: '',
    }
  },
  methods: {
    login() {
      if (this.email==''|| this.password=='')
      alert("Please enter email and password both");
      else
      this.$router.push('/logged');
    },
    clear(){
      this.email = '';
      this.password = '';
    }
  }
}
</script>

<style>
.container-fluid {
  background-image: url('/src/assets/downloadShip.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.login-form {
  background-color:rgb(250, 191, 82);
  width: 35vw;
  padding: 20px;
  margin-left: 20%;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.login-form form {
  margin-bottom: 0;
}

.login-form .form-group.row {
  margin-bottom: 15px;
}

.login-form label {
  font-weight: bold;
}

.login-form input[type="text"],
.login-form input[type="password"] {
  width: 100%;
  padding: 8px 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.login-form .button-container {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.btn.btn-primary {
  padding: 8px 14px;
  font-size: 14px;
}

.company-info {
  position: absolute;
  bottom: 20px;
  right: 20px;
  color: #fff;
  text-align: right;
}

.company-info h1 {
  font-size: 24px;
  margin-bottom: 5px;
}

.company-info p {
  font-size: 16px;
  margin-bottom: 10px;
}
</style>
