<template>
    
    <form class="w-100" name="form" @submit.prevent="handler">
        <div class="form-group">
            
            <input type="text" class="form-control form-control p-10-px border-r-7-px border-2-px font-medium f-w-500 my-2" placeholder="Username" v-model="user.username" name="username" id="username" />
        </div>
        <div class="form-group">
           
            <input type="password" class="form-control form-control p-10-px border-r-7-px border-2-px font-medium f-w-500 my-2" placeholder="Password" name="password" id="password" v-model="user.password" />
        </div>
        <div v-if="message && clicked" id="message-alert" class="alert mt-2" :class="successful ? 'alert-success' : 'alert-danger'">
            {{ message }}
        </div>
        <button id="auth-btn" class="p-10-px bg-color-dark border-0 border-r-7-px w-100 font-medium f-w-500 btn btn-primary mt-3">
            {{ style === 'register' ? 'Register' : 'Sign In' }}
        </button>
    </form>
</template>
<script>
import { defineComponent } from 'vue'
import User from '@/models/user'

export default defineComponent({
    name: 'AuthForm',
    data() {
        return {
            user: new User('', ''),
            message: '',
            clicked: false,
            successful: false
        }
    },
    props: {
        style: {
            type: String,
            default: ''
        }
    },
    methods: {
        handleLogin() {
            if (this.user.username && this.user.password) {
                this.$store.dispatch('auth/login', this.user).then(
                    (data) => {
                        this.message = data
                        this.successful = true
                        this.$router.push('/dashboard')
                        this.clicked = true
                    },
                    (error) => {
                        this.message = error.response.data.message
                        this.successful = false
                        this.clicked = true
                    }
                )
            }
        },
        handleRegister() {
            this.$store.dispatch('auth/register', this.user).then(
                (data) => {
                    this.message = data.message
                    this.successful = true
                    this.clicked = true
                    this.$router.push('/')
                },
                (error) => {
                    this.message = error.response.data.message
                    this.successful = false
                    this.clicked = true
                }
            )
        }
    },
    computed: {
        loggedIn() {
            return this.$store.state.auth.status.loggedIn
        },
        handler() {
            if (this.style === 'register') {
                return this.handleRegister
            } else {
                return this.handleLogin
            }
        }
    },
    mounted() {
        if (this.style && this.style === 'register') {
            if (this.loggedIn) {
                this.$router.push('/dashboard')
            }
        }
    },
    created() {
        if (this.style && this.style === 'login') {
            if (this.loggedIn) {
                this.$router.push('/dashboard')
            }
        }
    },
    watch: {
        clicked(val) {
            if (val) {
                setTimeout(() => (this.clicked = false), 3000)
            }
        }
    }
})

</script>
