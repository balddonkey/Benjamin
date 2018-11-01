<template>
  <div id='App'>
    
    <navigator />
      <div class="row h-100 m-0">
        <div class="col-3 mw-200 bg-white app-sidebar p-3">
          <sidebar />
        </div>
        <div class="col p-0">
          <div class="app-content">
            <div class="app-container">
              <manage v-bind:data="data" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="op-content">
      <div class="op-container">
        <manage v-bind:data="data" />
      </div>
    </div> -->
</template>

<script>
  import manage from "@permission/manage.vue";
  import navigator from "@navigation/navigator.vue";
  import sidebar from "@navigation/sidebar.vue";
  
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
      manage,
      navigator,
      sidebar
    }
  };
</script>

<style lang="css">
  @import "./App.css";
</style>
