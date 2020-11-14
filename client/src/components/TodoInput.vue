<template>
  <div class="inputBox shadow">
    <input type="text" v-model="todoInput" v-on:keyup.enter="addHandler" />
    <span class="addContainer" v-on:click="addHandler">
      <i class="fas fa-plus addBtn"></i>
    </span>

    <Modal v-if="showModal" @close="showModal = false">
      <h3 slot="header">
        경고
        <span> <i class="fas fa-times" @click="showModal = false"></i></span>
      </h3>
      <h4 slot="body">최소 한 자리 이상 입력하세요.</h4>
    </Modal>
  </div>
</template>

<script>
import Modal from "./common/Modal.vue";

export default {
  data: function() {
    return {
      todoInput: "",
      showModal: false,
    };
  },
  methods: {
    addHandler() {
      if (this.todoInput !== "") {
        //this.$emit("adding", this.todoInput);
        this.$store.commit("addTodo", this.todoInput);
        this.todoInput = "";
      } else {
        this.showModal = true;
      }
    },
  },
  components: {
    Modal,
  },
};
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
</style>
