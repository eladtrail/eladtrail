import { Routes, Route } from 'react-router-dom'

// Layout קבוע (Header + Footer)
import Layout from './components/Layout'

// עמודים
import Home    from './pages/Home'
import About   from './pages/About'
import Contact from './pages/Contact'
import Blog    from './pages/Blog'

// ===== פוסטים — כל פוסט = קובץ JSX נפרד =====
// כדי להוסיף פוסט חדש:
//   1. צור קובץ ב- src/posts/שם-הפוסט.jsx
//   2. ייבא אותו כאן (import)
//   3. הוסף <Route> בהמשך
import PostAlbaniaFriends from './posts/albania-friends'
import PostBashanitRange from './posts/bashanit-range'
import PostShvilIsrael from './posts/shvil-israel'
import PostTips5      from './posts/5-tips-beginners'
import PostGearBag    from './posts/gear-bag-review'

export default function App() {
  return (
    <Routes>
      {/* כל מה שבתוך Layout יקבל Header + Footer */}
      <Route element={<Layout />}>

        <Route path="/"        element={<Home />}    />
        <Route path="/blog"    element={<Blog />}    />
        <Route path="/about"   element={<About />}   />
        <Route path="/contact" element={<Contact />} />

        {/* ===== נתיבי הפוסטים ===== */}
        {/* path="/posts/שם-הנתיב" — חייב להתאים ל- slug בקובץ הפוסט */}
        <Route path="/posts/albania-friends"    element={<PostAlbaniaFriends />} />
        <Route path="/posts/bashanit-range"    element={<PostBashanitRange />} />
        <Route path="/posts/shvil-israel"      element={<PostShvilIsrael />} />
        <Route path="/posts/5-tips-beginners"  element={<PostTips5 />}      />
        <Route path="/posts/gear-bag-review"   element={<PostGearBag />}    />

      </Route>
    </Routes>
  )
}
