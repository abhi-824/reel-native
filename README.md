# reel-native

Reelify your content without thinking about the gestures, positioning, etc. while having control on the content. Just started, star or watch it grow!

---

## Installation

```sh
npm install reel-native
```

For testing out on example app:

```sh
Run the example app on iOS:

  $ yarn example ios

Run the example app on Android:

  $ yarn example android

Run the example app on Web:

  $ yarn example web
```

---

## Plan

## 🚀 Features
- **Flexible Content:** Supports **videos, images, text, or custom React components**.
- **Smooth Swipe Gestures:** Up/down for next/previous reel, left/right for user-defined actions.
- **Customizable Overlays:** Easily add buttons (like, comment, share, bookmark) or other UI.
- **Auto-scroll Animation:** Snaps to the next reel when partially swiped.
- **Preloading & Performance Optimized.**


---

## 🔧 Usage
```tsx
import ReelView from 'react-native-reel-view';

const reelsData = [
  { id: '1', type: 'video', source: require('./video.mp4') },
  { id: '2', type: 'image', source: require('./image.jpg') },
  { id: '3', type: 'text', content: 'This is a text-based reel' },
];

const MyReelScreen = () => {
  return (
    <ReelView
      data={reelsData}
      onSwipeLeft={(reel) => console.log('Left swipe on:', reel)}
      onSwipeRight={(reel) => console.log('Right swipe on:', reel)}
      renderOverlay={(reel) => (
        <CustomOverlay reel={reel} />
      )}
    />
  );
};
```

---

## 🎛 Props

| Prop | Type | Description |
|------|------|-------------|
| `data` | `Array<{id: string, type: string, source?: any, content?: string}>` | List of reels to render. |
| `onSwipeLeft` | `(reel: any) => void` | Function called on left swipe. |
| `onSwipeRight` | `(reel: any) => void` | Function called on right swipe. |
| `renderOverlay` | `(reel: any) => React.ReactNode` | Custom overlay for each reel. |
| `onActiveReelChange` | `(activeReel: any) => void` | Callback when the active reel changes. |

---

## 🔄 How It Works
1. **User swipes up/down** → Next/Previous reel is loaded.
2. **Left/Right swipe** → Triggers user-defined actions.
3. **Overlay Components** → You can pass custom UI like buttons, captions, etc.
4. **Active Reel Tracking** → The app knows which reel is currently visible.
5. **Preloading Strategy** → Loads next/previous reels in the background for smooth performance.

---

## 🚀 Roadmap
- [ ] **Add Infinite Scrolling Support**
- [ ] **Optimized Preloading for Videos**
- [ ] **Gesture Customization Options**
- [ ] **Pagination & API Integration**

---

## 🛠 Dependencies
- `react-native-gesture-handler`
- `react-native-reanimated`
- `react-native-screens`
- `react-native-safe-area-context`

---

## 📜 License
MIT License

---

## 🤝 Contributing
Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create a new branch (`feature/my-feature`)
3. Commit changes
4. Open a Pull Request

---

## 🔗 Links
- **NPM Package:** _(to be added)_
- **GitHub Repository:** _(to be added)_


## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
