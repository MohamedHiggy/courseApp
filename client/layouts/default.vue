<template>
  <div>
    <NavBar>
      <div class="nav-left">
        <NavItem>
          <n-link to="/">Home</n-link>
        </NavItem>
      </div>

      <template v-if="this.$auth.loggedIn">
        <a-dropdown>
          <a class="ant-dropdown-link">
            {{ this.$auth.user.name }}
          </a>
          <a-menu slot="overlay">
            <a-menu-item key="viewProfile">
              View Profile
            </a-menu-item>
            <a-menu-item key="viewProfile" v-if="this.$auth.user.is_admin">
              <n-link to="/admin/courses/new">New Course</n-link>
            </a-menu-item>
            <a-menu-item key="account">
              Account Settings
            </a-menu-item>
            <a-menu-item key="subscription">
              Subscription Settings
            </a-menu-item>
            <a-menu-item v-on:click="logout" key="logout">
              Logout
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </template>
      <template v-else>
        <div class="nav-right">
          <NavItem>
            <nuxt-link :to="'/auth/login'">
              <a-button type="primary">Login</a-button>
            </nuxt-link>
          </NavItem>

          <NavItem>
            <nuxt-link :to="'/auth/register'">
              <a-button>Register</a-button>
            </nuxt-link>
          </NavItem>
        </div>
      </template>
    </NavBar>

    <nuxt/>
  </div>
</template>
<script>
  import NavBar from "./Navbar/NavBar";
  import NavItem from "./Navbar/NavItem";
  export default {
    components: {
      NavBar,
      NavItem
    },
    methods: {
      logout() {
        this.$auth.logout()
      }
    }
  }
</script>
