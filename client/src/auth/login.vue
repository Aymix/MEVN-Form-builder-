<template>
<div class="row m-0 vh-100">
	
	<div class="col-lg-12 p-0">
		

      
        <div class="" style="border-radius: 25px;">
          <div class="card-body">    
						<div class="w-lg-520px p-10 p-lg-15 mx-auto">
							
                <p class="text-center h1 log-title mb-2 mx-1  mt-4">Connectez-vous !</p>
               

                <form v-on:submit.prevent="login" class="mx-1 mx-md-4 mt-5"> 

                

                  <div class="d-flex flex-row align-items-center mb-4">  
                    <div class="form-outline flex-fill mb-0">
                    	<label class="form-label" for="email">Adresse e-mail</label>
                      <input type="email" id="email" v-model="user.email" class="form-control" />
                      <div class="invalid-feedback" v-if="errors.password">{{errors.email[0]}}</div>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <div class="form-outline flex-fill mb-0">
                    	<div class="d-flex flex-stack ">
	                    	<label class="form-label" for="password">Mot de passe</label>
	                    	<router-link to="reset-password-teacher" class="forgot-password">Mot de passe oublié ?</router-link>
                    	</div>
                      <input type="password" id="password" v-model="user.password" class="form-control" />
                      
                       <div class="invalid-feedback" v-if="errors.password">{{errors.password[0]}}</div>
                    </div>
                  </div>

                  <div class="d-flex justify-content-center">
                    <button type="submit" class="btn btn-primary btn-lg w-100 log-btn mb-3">Se connecter</button>
                  </div>

                  <div class="text-center text-muted text-uppercase fw-bolder mb-3 u-divider">ou</div>

                 

                </form>
                </div>
          </div>
        </div>
	</div>
</div>


</template>

<script>
	//import * as auth from '../../services/auth_service';
	export default {
		name:'login',
		data() {
			return {
				user: {
					name: '',
					password: '',
					remember_me:false
				},
				errors: {}
			}
		},
		methods: {
			login: async function() {
				try{

					//const response = await auth.login(this.user);
					
					this.$router.push('/dashboard');						

				} catch (error) {
					console.log(''+error);
					switch (error.response.status) {
						case 422:
							this.errors = error.response.data.errors;
							break;
						case 401:
							this.flashMessage.error({
								message: error.response.data.message,
								time:5000
							});
							break;
						case 500:
							this.flashMessage.error({
								message: error.response.data.message,
								time:5000
							});
							break;
					}
				}
			}
		}
	}
	

</script>