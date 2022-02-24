<template>
  <div>

    <h2>人员登记系统</h2>

    <div class="people_list">
      <ul>
        <li>姓 名： <input type="text" v-model="peopleInfo.username"/></li>
        <li>年 龄： <input type="text" v-model="peopleInfo.age"/></li>
        <li>性 别：</li>
        <input type="radio" value="1" id="sex1" v-model="peopleInfo.sex"/>
        <label for="sex1">男</label>
        <input type="radio" value="2" id="sex2" v-model="peopleInfo.sex"/>
        <label for="sex2">女</label>
        <li>
          城 市：
          <select name="city" id="city" v-model="peopleInfo.city">
            <option v-for="(item, index) in peopleInfo.cityList" :key="index" :value="item">
              {{ item }}
            </option>
          </select>
        </li>

        <li>
          爱 好：

          <span v-for="(item, index) in peopleInfo.hobby" :key="index">
                <input type="checkbox" :id="'check' + index" v-model="item.checked"/>
                <label :for="'check' + index"> {{ item.title }}</label>
                &nbsp;&nbsp;
            </span>
        </li>

        <li>
          备 注：

          <textarea name="mark" id="mark" cols="30" rows="4" v-model="peopleInfo.mark"></textarea>
        </li>

      </ul>

      <button @click="doSubmit()" class="submit">获取表单的内容</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      peopleInfo: {
        username: '',
        age: '',
        sex: '2',
        cityList: [ '北京', '上海', '深圳' ],
        city: '上海',
        hobby: [ {
          title: '吃饭',
          checked: false,
        },
          {
            title: '睡觉',
            checked: false,
          },
          {
            title: '敲代码',
            checked: true,
          },
        ],
        mark: '',
      },
    };
  },
  methods: {
    doSubmit() {
      console.log(this.peopleInfo);
    },
  },
};
</script>

<style lang="less" scoped>
ul {
  list-style-type: none;
}

h2 {
  text-align: center;
}

.people_list {
  width: 400px;
  margin: 40px auto;
  padding: 40px;
  border: 1px solid #eee;
}

.people_list li {
  height: 50px;
  line-height: 50px;
}

.form_input {
  width: 300px;
  height: 28px;
}

.submit {
  float: right;
  margin-top: 10px;
}
</style>
