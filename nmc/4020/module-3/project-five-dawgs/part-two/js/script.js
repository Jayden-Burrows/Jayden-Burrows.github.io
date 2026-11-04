new Vue({
  el: '#app',
  data() {
    return {
      info: null,
      moreData: [],
      // selector: 0,
      whichDawg: '',
      // Added
      currentIndex: 0,
      numPages: 0,
      numResultsToDisplay: 20
    }
  },
  methods: {
    async showme(breed) {
      const response = await axios.get(`https://dog.ceo/api/breed/spaniel/${breed}/images`);
      this.info = response.data;
      this.moreData = this.info.message;
      this.whichDawg = breed;
      // this.selector = 0;
      // this.slider();
      this.currentIndex = 1;
      this.numPages = this.moreData.length % this.numResultsToDisplay == 0 ? this.moreData.length / this.numResultsToDisplay : Math.floor(this.moreData.length / this.numResultsToDisplay) + 1;
    }
    // slider() {
    //   this.selector++;
    //   if (this.selector >= this.moreData.length) {
    //     this.selector = 0;
    //   }
    // }
  },
  computed: {
    shownImages() {
      if (this.moreData.length > 0) {
        return this.moreData.slice((this.currentIndex - 1) * 20, (this.currentIndex - 1) * 20 + 20);
      } else {
        return [];
      }
    },

    pagination() {
      pages = [];
      let isSeparatorNeeded = true;
      for (let i = 1; i <= this.numPages; i++) {
        let isFirstPages = i <= 2;
        let isBeforeCurrentPages = (i < this.currentIndex - 1);
        let isAfterCurrentPages = (i > this.currentIndex + 1);
        let isCurrentPages = (i >= this.currentIndex - 1) && (i <= this.currentIndex + 1);
        let isLastPages = i >= this.numPages - 2;

        if (isFirstPages || isCurrentPages || isLastPages) {
          isSeparatorNeeded = true;
          pages.push(i);
        } else if (!isFirstPages && isBeforeCurrentPages && isSeparatorNeeded) {
          isSeparatorNeeded = false;
          pages.push('...');
        } else if (isAfterCurrentPages && !isLastPages & isSeparatorNeeded) {
          isSeparatorNeeded = false;
          pages.push('...');
        }
      }
      return pages;
    }
  }
});