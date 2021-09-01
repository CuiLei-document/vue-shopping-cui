<template>
  <div class="wrapper" ref="bs">
    <ul class="content">
      <li>hi1</li>
      <li>hi2</li>
      <li>hi3</li>
      <li>hi4</li>
      <li>hi5</li>
      <li>hi6</li>
      <li>hi7</li>
      <li>hi8</li>
      <li>hi9</li>
      <li>hi10</li>
      <li>hi11</li>
      <li>hi12</li>
      <li>hi13</li>
      <li>hi14</li>
      <li>hi15</li>
      <li>hi16</li>
      <li>hi17</li>
      <li>hi18</li>
      <li>hi19</li>
      <li>hi20</li>
      <li>hi21</li>
      <li>hi22</li>
      <li>hi23</li>
      <li>hi24</li>
      <li>hi25</li>
      <li>hi26</li>
      <li>hi27</li>
      <li>hi28</li>
      <li>hi29</li>
      <li>hi30</li>
      <li>hi31</li>
      <li>hi32</li>
      <li>hi33</li>
      <li>hi34</li>
      <li>hi35</li>
      <li>hi36</li>
      <li>hi37</li>
      <li>hi38</li>
      <li>hi39</li>
      <li>hi40</li>
      <li>hi41</li>
      <li>hi42</li>
      <li>hi43</li>
      <li>hi44</li>
      <li>hi45</li>
      <li>hi46</li>
      <li>hi47</li>
      <li>hi48</li>
      <li>hi49</li>
      <li>hi50</li>
      <li>hi51</li>
      <li>hi52</li>
      <li>hi53</li>
      <li>hi54</li>
      <li>hi55</li>
      <li>hi56</li>
      <li>hi57</li>
      <li>hi58</li>
      <li>hi59</li>
      <li>hi60</li>
      <li>hi61</li>
      <li>hi62</li>
      <li>hi63</li>
      <li>hi64</li>
      <li>hi65</li>
      <li>hi66</li>
      <li>hi67</li>
      <li>hi68</li>
      <li>hi69</li>
      <li>hi70</li>
      <li>hi71</li>
      <li>hi72</li>
      <li>hi73</li>
      <li>hi74</li>
      <li>hi75</li>
      <li>hi76</li>
      <li>hi77</li>
      <li>hi78</li>
      <li>hi79</li>
      <li>hi80</li>
      <li>hi81</li>
      <li>hi82</li>
      <li>hi83</li>
      <li>hi84</li>
      <li>hi85</li>
      <li>hi86</li>
      <li>hi87</li>
      <li>hi88</li>
      <li>hi89</li>
      <li>hi90</li>
      <li>hi91</li>
      <li>hi92</li>
      <li>hi93</li>
      <li>hi94</li>
      <li>hi95</li>
      <li>hi96</li>
      <li>hi97</li>
      <li>hi98</li>
      <li>hi99</li>
      <li>hi100</li>
    </ul>
    -->
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.bs)
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  height: 300px;
  background: red;
  // overflow: hidden;
  // overflow-y: auto;
}
</style>