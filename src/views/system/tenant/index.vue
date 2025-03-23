<script setup>
const formRef = ref()
const formValue = ref({
  contactName: undefined,
  companyName: undefined,
  status: undefined
})

const testData = []
</script>

<template>
  <n-card>
    <n-form ref="formRef" inline :model="formValue" label-placement="left">
      <n-grid x-gap="12" :cols="5" style="margin: 0">
        <n-gi>
          <n-form-item label="联系人" path="contactName">
            <n-input v-model:value="formValue.contactName" placeholder="请输入联系人" />
          </n-form-item>
        </n-gi>
        <n-gi>
          <n-form-item label="公司名称" path="companyName">
            <n-input v-model:value="formValue.companyName" placeholder="请输入公司名称" />
          </n-form-item>
        </n-gi>
        <n-gi>
          <n-form-item label="状态" path="status">
            <n-select
              v-model:value="formValue.status"
              :options="[
                { label: '启用', value: '1' },
                { label: '禁用', value: '0' }
              ]"
            />
          </n-form-item>
        </n-gi>
        <n-gi>
          <n-flex>
            <n-button type="primary">查询</n-button>
            <n-button>重置</n-button>
          </n-flex>
        </n-gi>
      </n-grid>
    </n-form>
    <n-divider style="margin: 0" />
    <n-flex mt-20>
      <n-button type="primary">新增</n-button>
      <n-button>删除</n-button>
    </n-flex>
    <x-n-data-table :data="testData" mt-20>
      <x-n-data-table-column type="selection" />
      <x-n-data-table-column key="contactName" title="联系人" />
      <x-n-data-table-column key="contactPhone" title="手机号" />
      <x-n-data-table-column key="companyName" title="公司名称" />
      <x-n-data-table-column key="address" title="公司名称" />
      <x-n-data-table-column key="domain" title="公司域名" />
      <x-n-data-table-column key="userCount" title="用户数量" />
      <x-n-data-table-column key="trialStartDate" title="试用开始日期" />
      <x-n-data-table-column key="trialEndDate" title="试用结束日期" />
      <x-n-data-table-column key="startDate" title="开始日期" />
      <x-n-data-table-column key="endDate" title="结束日期" />
      <x-n-data-table-column key="status" title="状态" />
      <x-n-data-table-column key="isPremium" title="Premium" />
    </x-n-data-table>
  </n-card>
</template>
