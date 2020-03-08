<style scoped>
.row {
  position: relative;
  width: 100%;
}

.row [class^="col"] {
  float: left;
  margin: 0.5rem 2%;
  min-height: 0.125rem;
}

.row::after {
  content: "";
  display: table;
  clear: both;
}
</style>