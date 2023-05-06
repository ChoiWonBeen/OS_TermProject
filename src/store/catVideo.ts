import { RefObject } from "react";
import { create } from "zustand";

const isDevelopment = process.env.NODE_ENV === "development";

export const VIDEO_INFO = [
  {
    src: "/video/1.cat_init.mp4",
    isLoop: false,
  },
  {
    src: "/video/2.inf_cat_stay.mp4",
    isLoop: false,
  },
  {
    src: "/video/3.work_start.mp4",
    isLoop: false,
  },
  {
    src: "/video/4.inf_work_slow.mp4",
    isLoop: true,
  },
  {
    src: "/video/4.inf_work_default.mp4",
    isLoop: true,
  },
  {
    src: "/video/4.inf_work_fast.mp4",
    isLoop: true,
  },
  {
    src: "/video/5.cat_out.mp4",
    isLoop: false,
  },
];

interface CatVideoStore {
  videoRef: RefObject<HTMLVideoElement> | { current: null };
  setVideoRef: (ref: RefObject<HTMLVideoElement>) => void;
  currentIndex: number;
  setVideo: (index: number) => void;
}

const changeVideo = (videoRef: RefObject<HTMLVideoElement>, index: number) => {
  if (videoRef.current) {
    videoRef.current.src = isDevelopment ? "/OS_TermProject" + VIDEO_INFO[index].src : "." + VIDEO_INFO[index].src;
    videoRef.current.loop = VIDEO_INFO[index].isLoop;
  }
};

export const useCatVideoStore = create<CatVideoStore>((set, get) => ({
  videoRef: { current: null },
  currentIndex: 0,
  setVideoRef: (ref: RefObject<HTMLVideoElement>) => {
    set({ videoRef: ref });
    if (ref.current) {
      changeVideo(ref, 0);
    }
  },
  setVideo: (index: number) => {
    if (index === get().currentIndex) {
      get().videoRef.current?.play();
    } else {
      set({ currentIndex: index });
      changeVideo(get().videoRef, index);
    }
  },
}));
