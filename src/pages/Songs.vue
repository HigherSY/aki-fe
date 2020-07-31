<template>
  <el-container>
    <el-header>
      <h1>午休歌投稿</h1>
    </el-header>
    <el-main>
      <transition-group name="flip-list">
        <el-row
          type="flex"
          justify="center"
          align="middle"
          v-for="song in songs"
          v-bind:key="song.n"
        >
          <el-col :md="8" span="20">
            <el-card>
              <div slot="header">
                <span>
                  来自
                  <el-link type="primary">@{{ song.nick }}</el-link>
                  已获得 {{ song.like }} 票
                </span>
                <el-button
                  type="primary"
                  icon="el-icon-sort-up"
                  size="small"
                  style="float: right; padding: 5px"
                  @click="like(song)"
                  :loading="loading"
                >送我上去</el-button>
              </div>
              <Meting :auto="song.jumpUrl" />
            </el-card>
          </el-col>
        </el-row>
      </transition-group>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      loading: true,
      songs: null,
    };
  },
  methods: {
    like(song) {
      this.loading = true;
      this.$http.post("/song/" + song.n + "/like").then(() => {
        song.like++;
        this.$message({
          message: "这个时候你应该投票成功了",
          type: "success",
        });
        this.songs.sort((a, b) => b.like - a.like);
        this.loading = false;
      });
    },
  },
  mounted() {
    const loading = this.$loading({
      lock: true
    });
    setTimeout(() => {
      loading.close();
    }, 2000);
    this.$http.get("/songs").then((response) => {
      this.songs = response.data;
      this.songs.sort((a, b) => b.like - a.like);
      this.loading = false;
    });
  },
};
</script>

<style scoped>
.el-row {
  margin-bottom: 40px;
}

.flip-list-move {
  transition: transform 1s;
}
</style>
