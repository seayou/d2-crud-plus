<template>
  <el-dropdown  style="margin-right: 10px"  @command="platformChanged">
    <el-button  :size='size' type="primary">
      {{platformName}}<i class="el-icon-arrow-down el-icon--right"></i>
    </el-button>
    <el-dropdown-menu  slot="dropdown">
      <el-dropdown-item v-for="item in platformList"  :key="item.id" :command="item.id">{{item.name}}</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>
<script>

import { d2CrudPlus } from 'd2-crud-plus'
import { request } from '@/api/service'
export default {
  name: 'platform-selector',
  props: {
    value: { type: Number },
    size: { type: String, default: 'small' }
  },
  data () {
    return {
      platformId: 1,
      platformName: '',
      platformList: [],
      platformDict: {
        url: '/permission/manager/platform/list',
        getData: (url, dict) => { // 配置此参数会覆盖全局的getRemoteDictFunc
          return request({ url: url }).then(ret => { return ret.data })
        },
        value: 'id',
        label: 'name'
      }
    }
  },
  async created () {
    if (this.value != null) {
      this.platformId = this.value
    }
    this.platformList = await d2CrudPlus.util.dict.get(this.platformDict)
    const current = this.getById(this.platformId, true)
    if (current != null) {
      this.platformId = current.id
      this.platformName = current.name
    }
    this.$emit('init', this.platformId)
  },
  methods: {
    getById (id, orGetFirst) {
      if (this.platformList == null) {
        return null
      }
      if (id != null) {
        for (const item of this.platformList) {
          if (item.id === id) {
            return item
          }
        }
      }
      if (orGetFirst && this.platformList.length > 0) {
        return this.platformList[0]
      }
    },
    platformChanged (id) {
      const current = this.getById(id, false)
      if (current != null) {
        this.platformId = current.id
        this.platformName = current.name
        this.$emit('change', current.id)
      }
    }
  }
}
</script>
