---
description: ""
sidebar: "docs"
next: "/docs/components/toasts/"
---

# Tables

<w-table>
  <w-table-header>
    <w-table-row>
      <w-table-header-cell>Name</w-table-header-cell>
      <w-table-header-cell>Job Position</w-table-header-cell>
      <w-table-header-cell>Since</w-table-header-cell>
      <w-table-header-cell>Salary</w-table-header-cell>
      <w-table-header-cell>Actions</w-table-header-cell>
    </w-table-row>
  </w-table-header>
  <w-table-body>
    <w-table-row v-for="item of [1,2,3,4,5]" :key="item">
      <w-table-body-cell>Andrew Mike</w-table-body-cell>
      <w-table-body-cell>Develop</w-table-body-cell>
      <w-table-body-cell>2013</w-table-body-cell>
      <w-table-body-cell>€ 99,225 </w-table-body-cell>
      <w-table-body-cell>
        <w-dropdown>
          <w-dropdown-trigger><w-icon name="ellipsis-v"/></w-dropdown-trigger>
          <w-dropdown-list align="right">
            <w-dropdown-item v-for="item of ['One', 'Two', 'Three']" :key="item"
              >{{ item }}</w-dropdown-item
            >
          </w-dropdown-list>
        </w-dropdown>
      </w-table-body-cell>
    </w-table-row>
  </w-table-body>
</w-table>

```html
<w-table>
  <w-table-header>
    <w-table-row>
      <w-table-header-cell>Name</w-table-header-cell>
      <w-table-header-cell>Job Position</w-table-header-cell>
      <w-table-header-cell>Since</w-table-header-cell>
      <w-table-header-cell>Salary</w-table-header-cell>
      <w-table-header-cell>Actions</w-table-header-cell>
    </w-table-row>
  </w-table-header>
  <w-table-body>
    <w-table-row v-for="item of [1,2,3,4,5]" :key="item">
      <w-table-body-cell>Andrew Mike</w-table-body-cell>
      <w-table-body-cell>Develop</w-table-body-cell>
      <w-table-body-cell>2013</w-table-body-cell>
      <w-table-body-cell>€ 99,225 </w-table-body-cell>
      <w-table-body-cell>
        <w-dropdown>
          <w-dropdown-trigger><w-icon name="ellipsis-v"/></w-dropdown-trigger>
          <w-dropdown-list align="right">
            <w-dropdown-item v-for="item of ['One', 'Two', 'Three']" :key="item"
              >{{ item }}</w-dropdown-item
            >
          </w-dropdown-list>
        </w-dropdown>
      </w-table-body-cell>
    </w-table-row>
  </w-table-body>
</w-table>
```
