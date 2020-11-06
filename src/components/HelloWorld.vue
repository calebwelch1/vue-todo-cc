<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="md-layout md-gutter">
      <div class="md-layout-item">
        <div class="md-layout">
          <div class="md-layout-item">
            <md-card class="md-accent">
              <md-card-header>
                <md-card-header-text>
                  <div
                    class="md-title"
                    style="margin-bottom: 10px; margin-top:-3px; font-size:32px;"
                  >
                    Total
                  </div>
                  <div class="md-" style="font-weight:bold; font-size:28px;">
                    {{ totalTodos }}
                  </div>
                </md-card-header-text>
              </md-card-header>
            </md-card>
          </div>
        </div>
      </div>
      <div class="md-layout-item">
        <md-card class="md-accent">
          <md-card-header>
            <md-card-header-text>
              <div
                class="md-title"
                style="margin-bottom: 10px; margin-top:-3px; font-size:32px;"
              >
                Incomplete
              </div>
              <div class="md-" style="font-weight:bold; font-size:28px;">
                {{ incomplete }}
              </div>
            </md-card-header-text>
          </md-card-header>
        </md-card>
      </div>
      <div class="md-layout-item">
        <md-card class="md-accent">
          <md-card-header>
            <md-card-header-text>
              <div
                class="md-title"
                style="margin-bottom: 10px; margin-top:-3px; font-size:32px;"
              >
                Complete
              </div>
              <div class="md-" style="font-weight:bold; font-size:28px;">
                {{ complete }}
              </div>
            </md-card-header-text>
          </md-card-header>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
    totalTodos: Number,
    incomplete: Number,
    complete: Number,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
