function App() {
    return (
      <>
        <div>
          <Router>
            <Routes>
              <Route path="/" element={<Navigate to="/Home" />} /> */This is how I
              made App.jsx the home page /*
              <Route path="/Home" Component={Home} />
              <Route path="/Tours" Component={Tours} />
              <Route path="/Events" Component={Events} />
              <Route path="/Contact" Component={Contact} />
              {/* <Route path="/Tour1.jsx" element={Tour1} /> */}
            </Routes>
          </Router>
        </div>
      </>
    );
  }