<template>
  <div>
    <transition-group name="list" tag="ul">
      <li v-for="(item, index) in this.storedTodoItems" v-bind:key="item.item">
        <i
          class="fas fa-check checkBtn"
          v-on:click="completing({ item, index })"
          v-bind:class="{ checkBtnCompleted: item.completed }"
        ></i>
        <span v-bind:class="{ textCompleted: item.completed }">{{
          item.item
        }}</span>
        <span class="removeBtn" v-on:click="removeItem({ item, index })">
          <i class="fas fa-trash-alt"></i
        ></span>
      </li>
    </transition-group>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations({
      removeItem: "removeTodo", //인자는 알아서 넘겨준다
      completing: "completeTodo",
    }),
    /*removeItem(item, index) {
      const obj = { item, index };
      this.$store.commit("removeTodo", obj);
    },*/

    /*completing(item, index) {
      const obj = { item, index };
      console.log(index);
      this.$store.commit("completeTodo", obj);
    },*/
  },
  computed: {
    /*todoItems() {
      return this.$store.getters.storedTodoItems;
    }, => 일반 getters 사용  */
    ...mapGetters(["storedTodoItems"]),
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}
.checkBtnCompleted {
  color: #b3adad;
}
.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}

.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
