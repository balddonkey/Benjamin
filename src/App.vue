<template>
  <div id="App">
    <b-navbar toggleable="md" type="dark" variant="info">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand href="#">NavBar</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item href="#">Link</b-nav-item>
          <b-nav-item href="#" disabled>Disabled</b-nav-item>
        </b-navbar-nav>
  
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search" />
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>
  
          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>
  
          <b-nav-item-dropdown right>
            <!-- Using button-content slot -->
            <template slot="button-content">
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Signout</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>
    <div class="manage">
      <!-- <manage v-bind:data="data"/> -->
      
    </div>
  </div>
</template>

<script>
  import manage from "@permission/manage.vue";
  
  export default {
    name: "App",
    data: () => {
      return {
        data: {
          titles: [
            "姓名",
            "密码",
            "实时控制",
            "分组修改",
            "策略制定",
            "报表查看",
            "管理人员添加",
            "授权人",
            "添加时间",
            "编辑"
          ],
          manages: [{
              name: "老驴0",
              id: 0,
              control: 1,
              modify: 1,
              strategy: 1,
              report: 1,
              manageAdd: 0,
              authorizer: "老马0",
              addTime: '2018-02-31'
            },
            {
              name: "老驴1",
              id: 1,
              control: 1,
              modify: 1,
              strategy: 1,
              report: 1,
              manageAdd: 0,
              authorizer: "老马1",
              addTime: '2018-02-31'
            },
            {
              name: "老驴0",
              id: 0,
              control: 1,
              modify: 1,
              strategy: 1,
              report: 1,
              manageAdd: 0,
              authorizer: "老马0",
              addTime: '2018-02-31'
            },
            {
              name: "老驴1",
              id: 1,
              control: 1,
              modify: 1,
              strategy: 1,
              report: 1,
              manageAdd: 0,
              authorizer: "老马1",
              addTime: '2018-02-31'
            },
            {
              name: "老驴0",
              id: 0,
              control: 1,
              modify: 1,
              strategy: 1,
              report: 1,
              manageAdd: 0,
              authorizer: "老马0",
              addTime: '2018-02-31'
            },
            {
              name: "老驴1",
              id: 1,
              control: 1,
              modify: 1,
              strategy: 1,
              report: 1,
              manageAdd: 0,
              authorizer: "老马1",
              addTime: '2018-02-31'
            },
            {
              name: "老驴0",
              id: 0,
              control: 1,
              modify: 1,
              strategy: 1,
              report: 1,
              manageAdd: 0,
              authorizer: "老马0",
              addTime: '2018-02-31'
            },
            {
              name: "老驴1",
              id: 1,
              control: 1,
              modify: 1,
              strategy: 1,
              report: 1,
              manageAdd: 0,
              authorizer: "老马1",
              addTime: '2018-02-31'
            },
            {
              name: "老驴0",
              id: 0,
              control: 1,
              modify: 1,
              strategy: 1,
              report: 1,
              manageAdd: 0,
              authorizer: "老马0",
              addTime: '2018-02-31'
            },
            {
              name: "老驴1",
              id: 1,
              control: 1,
              modify: 1,
              strategy: 1,
              report: 1,
              manageAdd: 0,
              authorizer: "老马1",
              addTime: '2018-02-31'
            }
          ]
        }
      };
    },
    components: {
      manage
    }
  };
</script>

<style lang="css">
  @import "./App.css";
</style>
