import axios from "axios";
import SGSS from '@/api/SGSS';
import { defineStore } from "pinia";
import router from '@/router';

// 예제
export const useUploadVideoStore = defineStore("upload", {
  state: () => {
    return { 
        video_list: [],
        show_video: '',
        show_add_mia: 0,
        result_urls:[],

        analysis_case:null,
        analysis_url_list: [],
        analysis_video_idx: null,
        analysis_video: null,
        is_analysis_video: false,
        is_result_view: true,
        is_local_view:false,
        video_list_mode: true //false 는 del
    }
  },
  actions: {
    uploadVideo () {
      console.log('분석 시작')
      const formData = new FormData()
      const idx = this.analysis_video_idx
      formData.append("video", this.video_list[idx])
      formData.append("class", this.analysis_case)
      const token = localStorage.getItem('token')
      axios.post(
        SGSS.upload.upload(),
        formData,
        {headers: {Authorization : 'Bearer ' + token}}
      ) .then ((res) => {
        this.analysis_url_list[idx][this.analysis_case] = res.data
        this.analysis_video = res.data['video_file']
        this.analysis_video_idx = idx
        console.log('분석끝')
      }) .then (() => router.push({name : 'upload'}))
      .catch ((err) => {
        console.log(err)
      })
    },
    selectVideo (video) {
      this.show_video = URL.createObjectURL(video)
    }
  }
})