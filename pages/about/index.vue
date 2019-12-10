<head>
  <meta charset="utf-8">
</head>

<template>
  <div class="container">
    <div>
      <p class="long-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        m agna aliqua. Varius duis at consectetur lorem donec massa sapien faucibus et. Accumsan sit amet nulla facilisi.
        Fames ac turpis egestas maecenas pharetra convallis. Nulla aliquet porttitor lacus luctus accumsan tortor posuere
        ac ut. Vestibulum sed arcu non odio euismod lacinia at quis. Nunc aliquet bibendum enim facilisis gravida.
        Hendrerit dolor magna eget est lorem ipsum dolor sit amet. Mattis molestie a iaculis at erat pellentesque
        adipiscing. Vulputate mi sit amet mauris. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi.
        <br>
        <br>
        Metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel. Massa ultricies mi quis hendrerit
        dolor. Sit amet commodo nulla facilisi nullam vehicula ipsum. Duis at consectetur lorem donec massa sapien
        faucibus et molestie. Tempus urna et pharetra pharetra massa massa. Quam viverra orci sagittis eu volutpat
        odio facilisis mauris sit. Nullam eget felis eget nunc lobortis mattis aliquam faucibus. Et egestas quis
        ipsum suspendisse ultrices gravida dictum. Tellus cras adipiscing enim eu turpis egestas pretium aenean
        pharetra. In vitae turpis massa sed elementum tempus. Ut pharetra sit amet aliquam id. Malesuada nunc vel
        risus commodo viverra maecenas. Nullam ac tortor vitae purus faucibus ornare suspendisse. Ac auctor augue
        mauris augue neque gravida in fermentum et. Ornare lectus sit amet est. Nibh venenatis cras sed felis eget
        velit aliquet sagittis. Etiam erat velit scelerisque in dictum non consectetur a erat. Velit euismod in
        pellentesque massa placerat duis ultricies lacus.
        <br>
        <br>
        Amet tellus cras adipiscing enim. Id neque aliquam vestibulum morbi. Faucibus nisl tincidunt eget nullam
        non nisi est sit. Tincidunt nunc pulvinar sapien et ligula ullamcorper. Tincidunt tortor aliquam nulla facilisi
        cras fermentum. Tempus quam pellentesque nec nam aliquam sem et tortor. Sed augue lacus viverra vitae congue eu
        consequat ac felis. Tellus pellentesque eu tincidunt tortor aliquam. Proin gravida hendrerit lectus a. Diam quis
        enim lobortis scelerisque.
        <br>
        <br>
        Habitant morbi tristique senectus et netus et malesuada fames ac. Fermentum odio eu feugiat pretium nibh ipsum
        consequat nisl. Id nibh tortor id aliquet lectus. Purus in massa tempor nec feugiat nisl. Vel elit scelerisque
        mauris pellentesque pulvinar pellentesque habitant morbi. Facilisis sed odio morbi quis commodo odio aenean sed
        adipiscing. Dignissim cras tincidunt lobortis feugiat vivamus at. Vitae semper quis lectus nulla at volutpat
        diam ut. Faucibus nisl tincidunt eget nullam non nisi est sit. Ultricies lacus sed turpis tincidunt id aliquet
        risus feugiat in. Enim nunc faucibus a pellentesque sit amet porttitor eget. Volutpat odio facilisis mauris sit
        amet massa.
        <br>
        <br>
        Tempor commodo ullamcorper a lacus. Massa massa ultricies mi quis hendrerit dolor. Varius vel pharetra vel
        turpis nunc eget lorem dolor. Pulvinar sapien et ligula ullamcorper malesuada. In vitae turpis massa sed elementum.
        Sapien pellentesque habitant morbi tristique. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Amet
        facilisis magna etiam tempor orci eu lobortis. Dictum varius duis at consectetur. Sed tempus urna et pharetra pharetra.
        Ipsum suspendisse ultrices gravida dictum fusce ut placerat. Vel pretium lectus quam id. At lectus urna duis convallis
        convallis tellus. Volutpat consequat mauris nunc congue nisi vitae. Eleifend mi in nulla posuere sollicitudin aliquam
        ultrices. Ut morbi tincidunt augue interdum velit euismod in pellentesque massa. Posuere ac ut consequat semper.
        Sed enim ut sem viverra aliquet eget sit amet. Penatibus et magnis dis parturient montes nascetur ridiculus mus.
      </p>
    </div>
  </div>
</template>

<style>
  .about{
  align-content:center;
  }

  .long-text {
    font-family: 'Times New Roman';
    font-size: 30px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    padding-left:30px;
  }

</style>


<script>
  export default {
    methods: {
      onLoadUser() {
        this.$router.push('/users/' + this.userID)
      }
    },
    layout: 'NavBar'
  }

</script>
