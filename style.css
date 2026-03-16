/* ===== 全局重置 ===== */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --bg: #0d1410;
  --bg2: #111a14;
  --bg3: #162019;
  --accent: #7eb87a;
  --accent2: #a8d5a2;
  --text: #e8ede6;
  --text2: #9db09a;
  --border: #243028;
  --card-bg: #141f18;
  --radius: 12px;
  --font: 'PingFang SC', 'Microsoft YaHei', sans-serif;
}

html { scroll-behavior: smooth; }
body { background: var(--bg); color: var(--text); font-family: var(--font); line-height: 1.7; }
a { color: inherit; text-decoration: none; }
img { max-width: 100%; display: block; }
ul { list-style: none; }

/* ===== 导航 ===== */
.navbar {
  position: fixed; top: 0; left: 0; right: 0; z-index: 100;
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 40px; height: 64px;
  background: rgba(13,20,16,0.92); backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
}
.nav-logo { font-size: 18px; font-weight: 700; color: var(--accent2); letter-spacing: 2px; }
.nav-links { display: flex; gap: 32px; }
.nav-links a { font-size: 14px; color: var(--text2); transition: color .2s; letter-spacing: 1px; }
.nav-links a:hover, .nav-links a.active { color: var(--accent2); }
.nav-toggle { display: none; font-size: 22px; cursor: pointer; color: var(--text2); }

/* ===== 英雄区 ===== */
.hero {
  position: relative; height: 100vh; min-height: 600px;
  display: flex; align-items: center; justify-content: center;
  background: linear-gradient(160deg, #0d1f14 0%, #0a1a10 40%, #060e08 100%);
  overflow: hidden;
}
.hero::before {
  content: ''; position: absolute; inset: 0;
  background: radial-gradient(ellipse at 30% 60%, rgba(126,184,122,0.08) 0%, transparent 60%),
              radial-gradient(ellipse at 70% 20%, rgba(100,160,80,0.05) 0%, transparent 50%);
}
.hero-overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.3); }
.hero-content { position: relative; text-align: center; padding: 0 20px; }
.hero-sub { font-size: 13px; letter-spacing: 4px; color: var(--accent); text-transform: uppercase; margin-bottom: 20px; }
.hero-title { font-size: clamp(36px, 6vw, 72px); font-weight: 800; line-height: 1.15; margin-bottom: 20px; color: #fff; }
.hero-desc { font-size: 16px; color: var(--text2); letter-spacing: 3px; margin-bottom: 40px; }
.hero-scroll { position: absolute; bottom: 32px; left: 50%; transform: translateX(-50%); color: var(--text2); font-size: 20px; animation: bounce 2s infinite; }
@keyframes bounce { 0%,100%{transform:translateX(-50%) translateY(0)} 50%{transform:translateX(-50%) translateY(8px)} }

/* ===== 按钮 ===== */
.btn-primary {
  display: inline-block; padding: 14px 36px; border-radius: 40px;
  background: var(--accent); color: #0d1410; font-weight: 700; font-size: 15px;
  transition: transform .2s, box-shadow .2s;
}
.btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(126,184,122,0.3); }
.btn-outline {
  display: inline-block; padding: 12px 32px; border-radius: 40px;
  border: 1px solid var(--accent); color: var(--accent); font-size: 14px;
  transition: background .2s, color .2s;
}
.btn-outline:hover { background: var(--accent); color: #0d1410; }

/* ===== 精选区 ===== */
.featured { padding: 100px 40px 60px; max-width: 1200px; margin: 0 auto; }
.section-header { margin-bottom: 40px; }
.section-tag { font-size: 12px; letter-spacing: 3px; color: var(--accent); text-transform: uppercase; }
.section-header h2 { font-size: 32px; font-weight: 700; margin-top: 8px; }
.featured-grid { display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: auto auto; gap: 16px; }
.featured-card.large { grid-row: span 2; }
.featured-card { border-radius: var(--radius); overflow: hidden; background: var(--card-bg); border: 1px solid var(--border); transition: transform .3s; }
.featured-card:hover { transform: translateY(-4px); }
.card-media { position: relative; width: 100%; }
.featured-card.large .card-media { height: 440px; }
.featured-card:not(.large) .card-media { height: 210px; }
.card-media img { width: 100%; height: 100%; object-fit: cover; }
.card-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%); }
.card-type { position: absolute; top: 12px; right: 12px; background: rgba(0,0,0,0.6); color: var(--accent2); font-size: 11px; padding: 4px 10px; border-radius: 20px; letter-spacing: 1px; }
.card-info { padding: 16px 20px; }
.card-info h3 { font-size: 16px; font-weight: 600; margin-bottom: 4px; }
.card-info p { font-size: 13px; color: var(--text2); }
.section-footer { text-align: center; margin-top: 40px; }

/* ===== 统计 ===== */
.stats {
  display: flex; justify-content: center; gap: 80px;
  padding: 60px 40px; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border);
  background: var(--bg2);
}
.stat-item { text-align: center; }
.stat-num { display: block; font-size: 48px; font-weight: 800; color: var(--accent2); line-height: 1; }
.stat-label { font-size: 13px; color: var(--text2); margin-top: 8px; letter-spacing: 1px; }

/* ===== 页面英雄(子页) ===== */
.page-hero {
  padding: 140px 40px 60px; text-align: center;
  background: linear-gradient(180deg, #0a1a10 0%, var(--bg) 100%);
}
.page-hero h1 { font-size: clamp(32px, 5vw, 56px); font-weight: 800; margin-bottom: 16px; }
.page-hero p { font-size: 16px; color: var(--text2); letter-spacing: 1px; }

/* ===== 作品集 ===== */
.works-section { max-width: 1200px; margin: 0 auto; padding: 40px 40px 80px; }
.filter-bar { display: flex; gap: 12px; margin-bottom: 40px; flex-wrap: wrap; }
.filter-btn {
  padding: 8px 24px; border-radius: 40px; border: 1px solid var(--border);
  background: transparent; color: var(--text2); font-size: 13px; cursor: pointer;
  transition: all .2s; font-family: var(--font);
}
.filter-btn:hover, .filter-btn.active { background: var(--accent); border-color: var(--accent); color: #0d1410; font-weight: 600; }
.works-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; }
.work-card { background: var(--card-bg); border: 1px solid var(--border); border-radius: var(--radius); overflow: hidden; transition: transform .3s, box-shadow .3s; cursor: pointer; }
.work-card:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(0,0,0,0.4); }
.work-card.hidden { display: none; }
.work-media { position: relative; height: 200px; background: var(--bg3); overflow: hidden; }
.work-media img, .work-media video { width: 100%; height: 100%; object-fit: cover; }
.work-thumb { width: 100%; height: 100%; }
.work-play {
  position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%);
  width: 48px; height: 48px; border-radius: 50%;
  background: rgba(126,184,122,0.85); color: #0d1410;
  display: flex; align-items: center; justify-content: center; font-size: 18px;
  transition: transform .2s;
}
.work-card:hover .work-play { transform: translate(-50%,-50%) scale(1.1); }
.work-type-badge { position: absolute; top: 10px; right: 10px; background: rgba(0,0,0,0.65); color: var(--accent2); font-size: 11px; padding: 3px 10px; border-radius: 20px; }
.work-info { padding: 16px 18px; }
.work-info h3 { font-size: 15px; font-weight: 600; margin-bottom: 4px; }
.work-info p { font-size: 12px; color: var(--text2); margin-bottom: 10px; }
.work-tag { font-size: 11px; padding: 3px 10px; border-radius: 20px; background: var(--bg3); color: var(--accent); border: 1px solid var(--border); }

/* 添加作品提示 */
.add-work-hint { text-align: center; padding: 20px 40px 60px; color: var(--text2); font-size: 13px; }
.add-work-hint code { background: var(--bg3); padding: 2px 8px; border-radius: 4px; color: var(--accent2); }

/* ===== 关于我 ===== */
.about-section { max-width: 1100px; margin: 0 auto; padding: 60px 40px 100px; }
.about-container { display: grid; grid-template-columns: 240px 1fr; gap: 60px; align-items: start; }
.avatar-circle {
  width: 180px; height: 180px; border-radius: 50%;
  background: var(--bg3); border: 2px solid var(--border);
  display: flex; align-items: center; justify-content: center; overflow: hidden; margin: 0 auto;
}
.avatar-circle img { width: 100%; height: 100%; object-fit: cover; }
.avatar-fallback { font-size: 64px; color: var(--accent2); }
.about-content h2 { font-size: 28px; font-weight: 700; margin-bottom: 12px; }
.about-lead { font-size: 17px; color: var(--accent2); margin-bottom: 20px; }
.about-content p { color: var(--text2); margin-bottom: 16px; font-size: 15px; }
.skills-block { margin-top: 28px; }
.skills-block h3 { font-size: 14px; letter-spacing: 2px; color: var(--text2); text-transform: uppercase; margin-bottom: 12px; }
.skill-tags { display: flex; flex-wrap: wrap; gap: 8px; }
.skill-tags span { font-size: 13px; padding: 5px 14px; border-radius: 20px; background: var(--bg3); border: 1px solid var(--border); color: var(--accent2); }

/* ===== 联系 ===== */
.contact-section { max-width: 1100px; margin: 0 auto; padding: 60px 40px 100px; }
.contact-container { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; }
.contact-info h2 { font-size: 24px; font-weight: 700; margin-bottom: 16px; }
.contact-info p { color: var(--text2); margin-bottom: 32px; font-size: 15px; }
.contact-items { display: flex; flex-direction: column; gap: 24px; }
.contact-item { display: flex; align-items: flex-start; gap: 16px; }
.contact-icon { font-size: 24px; margin-top: 2px; }
.contact-item strong { display: block; font-size: 14px; margin-bottom: 4px; }
.contact-item p { color: var(--text2); font-size: 14px; margin: 0; }
.contact-form h2 { font-size: 24px; font-weight: 700; margin-bottom: 24px; }
.form-group { margin-bottom: 20px; }
.form-group label { display: block; font-size: 13px; color: var(--text2); margin-bottom: 8px; letter-spacing: 1px; }
.form-group input, .form-group textarea {
  width: 100%; padding: 12px 16px; border-radius: 8px;
  background: var(--bg3); border: 1px solid var(--border); color: var(--text);
  font-family: var(--font); font-size: 14px; outline: none; transition: border-color .2s;
}
.form-group input:focus, .form-group textarea:focus { border-color: var(--accent); }
.form-success { display: none; margin-top: 16px; padding: 12px 16px; border-radius: 8px; background: rgba(126,184,122,0.15); color: var(--accent2); font-size: 14px; }

/* ===== 页脚 ===== */
.footer { text-align: center; padding: 32px; border-top: 1px solid var(--border); color: var(--text2); font-size: 13px; letter-spacing: 1px; }

/* ===== 响应式 ===== */
@media (max-width: 768px) {
  .navbar { padding: 0 20px; }
  .nav-links { display: none; flex-direction: column; position: absolute; top: 64px; left: 0; right: 0; background: var(--bg2); padding: 20px; gap: 16px; border-bottom: 1px solid var(--border); }
  .nav-links.open { display: flex; }
  .nav-toggle { display: block; }
  .featured { padding: 80px 20px 40px; }
  .featured-grid { grid-template-columns: 1fr; }
  .featured-card.large { grid-row: span 1; }
  .featured-card.large .card-media { height: 260px; }
  .stats { gap: 32px; flex-wrap: wrap; padding: 40px 20px; }
  .works-section { padding: 20px 20px 60px; }
  .about-container { grid-template-columns: 1fr; }
  .contact-container { grid-template-columns: 1fr; }
  .page-hero { padding: 100px 20px 40px; }
}