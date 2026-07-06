// ================================================================
// DATA MATA KULIAH (8 Semester)
// ================================================================
const SEMESTER_DATA = [{
    name: "Semester 1",
    matkul: [
        { kode: "FS105", name: "Algoritma dan Pemrograman", sks: 3 },
        { kode: "FS107", name: "Aljabar", sks: 2 },
        { kode: "UR101", name: "Character Building: Agama", sks: 2 },
        { kode: "UR103", name: "Character Building: Pancasila", sks: 2 },
        { kode: "FS103", name: "Komputer dan Masyarakat", sks: 2 },
        { kode: "FS109", name: "Organisasi dan Arsitektur Komputer", sks: 3 },
        { kode: "UR105", name: "Pengantar Teknologi Informasi", sks: 3 },
        { kode: "FS111", name: "Statistika dan Probabilitas", sks: 3 }
    ]
}, {
    name: "Semester 2",
    matkul: [
        { kode: "UR102", name: "Character Building: Bahasa Inggris", sks: 3 },
        { kode: "UR104", name: "Character Building: Kewarganegaraan", sks: 2 },
        { kode: "FS108", name: "Interaksi Manusia Dan Komputer", sks: 2 },
        { kode: "FS110", name: "Kalkulus", sks: 3 },
        { kode: "FS116", name: "Matematika Diskrit", sks: 3 },
        { kode: "FS112", name: "Pemrograman Berorientasi Objek", sks: 3 },
        { kode: "FS302", name: "Pengantar Kecerdasan Buatan", sks: 2 },
        { kode: "FS106", name: "Teknik Kompilasi", sks: 2 }
    ]
}, {
    name: "Semester 3",
    matkul: [
        { kode: "FS218", name: "Analisis dan Perancangan Sistem", sks: 3 },
        { kode: "UR201", name: "Character Building: Bahasa Indonesia", sks: 2 },
        { kode: "UR203", name: "Character Building: Bahasa Inggris II", sks: 3 },
        { kode: "FS309", name: "Fisika", sks: 2 },
        { kode: "FS213", name: "Kalkulus Lanjut", sks: 2 },
        { kode: "FS325", name: "Keamanan Teknologi Informasi", sks: 2 },
        { kode: "FS203", name: "Pemrograman I", sks: 3 },
        { kode: "FS207", name: "Sistem Operasi", sks: 3 }
    ]
}, {
    name: "Semester 4",
    matkul: [
        { kode: "FS308", name: "Bahasa Rakitan", sks: 3 },
        { kode: "FS208", name: "Database Management System (DBMS)", sks: 3 },
        { kode: "UR202", name: "Entrepreneurship", sks: 3 },
        { kode: "FS314", name: "Machine Learning", sks: 2 },
        { kode: "UR206", name: "Metode Penelitian dan Penulisan Ilmiah", sks: 3 },
        { kode: "FS212", name: "Mikroprosesor", sks: 3 },
        { kode: "FS204", name: "Pemrograman II", sks: 3 }
    ]
}, {
    name: "Semester 5",
    matkul: [
        { kode: "FS331", name: "Jaringan Komputer dan Komunikasi Data", sks: 3 },
        { kode: "FS301", name: "Logika Matematika", sks: 2 },
        { kode: "FS327", name: "Pemrograman Berbasis Web", sks: 3 },
        { kode: "FS305", name: "Pemrograman III", sks: 3 },
        { kode: "FS323", name: "Sistem Digital", sks: 3 },
        { kode: "FS209", name: "Struktur Data", sks: 3 },
        { kode: "FS215", name: "Teknologi Platform", sks: 3 }
    ]
}, {
    name: "Semester 6",
    matkul: [
        { kode: "FS304", name: "Data Warehouse", sks: 3 },
        { kode: "UR304", name: "Etika Profesi dan Profesional", sks: 2 },
        { kode: "FS312", name: "Expert System", sks: 2 },
        { kode: "IK401", name: "Perawatan Perangkat Lunak", sks: 3 },
        { kode: "FS306", name: "Rekayasa Piranti Lunak", sks: 3 },
        { kode: "IK305", name: "Rekayasa Sistem", sks: 3 },
        { kode: "IK403", name: "Teori Bahasa dan Automata", sks: 3 }
    ]
}, {
    name: "Semester 7",
    matkul: [
        { kode: "IK404", name: "Big Data", sks: 3 },
        { kode: "FS403", name: "Cloud Computing", sks: 2 },
        { kode: "FS411", name: "Internet of Things (IOT)", sks: 3 },
        { kode: "UR401", name: "Kuliah Kerja Praktek (KKP)", sks: 3 },
        { kode: "FS313", name: "Mobile Computing", sks: 2 },
        { kode: "FS413", name: "Pengolahan Citra Digital", sks: 2 },
        { kode: "FS407", name: "Sistem Cerdas", sks: 2 },
        { kode: "FS409", name: "Sistem Terdistribusi", sks: 2 }
    ]
}, {
    name: "Semester 8",
    matkul: [
        { kode: "UR402", name: "Skripsi", sks: 6 },
        { kode: "UR403", name: "Tugas Akhir (Prototipe)", sks: 6 },
        { kode: "UR404", name: "Tugas Akhir (Proyek)", sks: 6 },
        { kode: "UR405", name: "Tugas Akhir (Publikasi)", sks: 6 }
    ]
}];

// ================================================================
// MAPPING KARIR
// ================================================================
const KARIR_MAP = {
    "Software Engineer": [
        "Algoritma dan Pemrograman", "Pemrograman Berorientasi Objek",
        "Pemrograman I", "Pemrograman II", "Pemrograman III",
        "Struktur Data", "Analisis dan Perancangan Sistem",
        "Rekayasa Piranti Lunak", "Perawatan Perangkat Lunak",
        "Rekayasa Sistem", "Database Management System (DBMS)",
        "Pemrograman Berbasis Web", "Teknologi Platform"
    ],
    "Cyber Security": [
        "Keamanan Teknologi Informasi", "Jaringan Komputer dan Komunikasi Data",
        "Sistem Operasi", "Organisasi dan Arsitektur Komputer",
        "Teknik Kompilasi", "Teori Bahasa dan Automata", "Sistem Digital"
    ],
    "UI/UX Designer": [
        "Interaksi Manusia Dan Komputer", "Pengantar Teknologi Informasi",
        "Komputer dan Masyarakat", "Entrepreneurship",
        "Metode Penelitian dan Penulisan Ilmiah", "Etika Profesi dan Profesional"
    ],
    "DevOps Engineer": [
        "Cloud Computing", "Sistem Terdistribusi",
        "Jaringan Komputer dan Komunikasi Data", "Sistem Operasi",
        "Data Warehouse", "Big Data", "Internet of Things (IOT)",
        "Mobile Computing"
    ],
    "Data Scientist": [
        "Statistika dan Probabilitas", "Matematika Diskrit",
        "Kalkulus", "Kalkulus Lanjut", "Pengantar Kecerdasan Buatan",
        "Machine Learning", "Expert System", "Sistem Cerdas",
        "Pengolahan Citra Digital"
    ]
};

const KARIR_ICON = {
    "Software Engineer": "🚀",
    "Cyber Security": "🛡️",
    "UI/UX Designer": "🎨",
    "DevOps Engineer": "⚡",
    "Data Scientist": "📊"
};

const KARIR_COLORS = {
    "Software Engineer": "#8DB4D6",
    "Cyber Security": "#E8A87C",
    "UI/UX Designer": "#D4A0B8",
    "DevOps Engineer": "#6BB5A0",
    "Data Scientist": "#D6E6F2"
};

const NILAI_BOBOT = {
    'A+': 4.0, 'A': 4.0, 'A-': 3.7,
    'B+': 3.3, 'B': 3.0, 'B-': 2.7,
    'C+': 2.3, 'C': 2.0, 'C-': 1.7,
    'D+': 1.3, 'D': 1.0, 'D-': 0.7,
    'E': 0.0
};
const NILAI_LIST = ['A+', 'A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'D-', 'E'];

// ================================================================
// STATE
// ================================================================
let currentUser = null;
let currentNilai = {};
let historyData = [];
let lastResult = null;

// ================================================================
// INIT
// ================================================================
document.addEventListener('DOMContentLoaded', function() {
    const savedUser = localStorage.getItem('itcompass_user');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        const savedNilai = localStorage.getItem('itcompass_nilai_' + currentUser.email);
        if (savedNilai) currentNilai = JSON.parse(savedNilai);
        const savedHistory = localStorage.getItem('itcompass_history_' + currentUser.email);
        if (savedHistory) historyData = JSON.parse(savedHistory);
        showDashboard();
    } else {
        showLogin();
    }

    if (localStorage.getItem('itcompass_theme') === 'dark') {
        document.body.classList.add('dark');
        document.getElementById('themeToggle').textContent = '☀️';
        document.getElementById('themeToggle').style.background = '#3A5A7A';
        document.getElementById('themeToggle').style.color = '#D6E6F2';
    }
});

// ================================================================
// AUTH
// ================================================================
function showLogin() {
    document.querySelectorAll('.auth-page, .dashboard-page').forEach(el => el.style.display = 'none');
    document.getElementById('loginPage').style.display = 'block';
    document.getElementById('logoutBtn').classList.add('hidden');
}

function showRegister() {
    document.querySelectorAll('.auth-page, .dashboard-page').forEach(el => el.style.display = 'none');
    document.getElementById('registerPage').style.display = 'block';
}

function register(e) {
    e.preventDefault();
    const name = document.getElementById('regName').value.trim();
    const nim = document.getElementById('regNim').value.trim();
    const email = document.getElementById('regEmail').value.trim();
    const password = document.getElementById('regPassword').value;

    if (!name || !nim || !email || !password) {
        showToast('Semua field harus diisi!', 'error');
        return;
    }
    if (password.length < 6) {
        showToast('Password minimal 6 karakter!', 'error');
        return;
    }

    const users = JSON.parse(localStorage.getItem('itcompass_users') || '[]');
    if (users.find(u => u.email === email)) {
        showToast('Email sudah terdaftar!', 'error');
        return;
    }

    users.push({ name, nim, email, password });
    localStorage.setItem('itcompass_users', JSON.stringify(users));

    showToast('Registrasi berhasil! Silakan login 🎉', 'success');
    showLogin();
    document.getElementById('loginEmail').value = email;
    document.getElementById('registerForm').reset();
}

function login(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value.trim();

    const users = JSON.parse(localStorage.getItem('itcompass_users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);

    if (!user) {
        showToast('Email atau password salah!', 'error');
        return;
    }

    currentUser = user;
    localStorage.setItem('itcompass_user', JSON.stringify(user));

    const savedNilai = localStorage.getItem('itcompass_nilai_' + email);
    if (savedNilai) currentNilai = JSON.parse(savedNilai);
    else currentNilai = {};

    const savedHistory = localStorage.getItem('itcompass_history_' + email);
    if (savedHistory) historyData = JSON.parse(savedHistory);
    else historyData = [];

    showToast('Selamat datang, ' + user.name + '! 🎉', 'success');
    showDashboard();
    document.getElementById('loginForm').reset();
}

function logout() {
    if (currentUser) {
        localStorage.setItem('itcompass_nilai_' + currentUser.email, JSON.stringify(currentNilai));
        localStorage.setItem('itcompass_history_' + currentUser.email, JSON.stringify(historyData));
    }
    currentUser = null;
    currentNilai = {};
    historyData = [];
    localStorage.removeItem('itcompass_user');
    showLogin();
    showToast('Logout berhasil!', 'info');
}

// ================================================================
// DASHBOARD
// ================================================================
function showDashboard() {
    document.querySelectorAll('.auth-page, .dashboard-page').forEach(el => el.style.display = 'none');
    document.getElementById('dashboardPage').style.display = 'block';
    document.getElementById('inputPage').style.display = 'none';
    document.getElementById('resultPage').style.display = 'none';
    document.getElementById('historyPage').style.display = 'none';
    document.getElementById('logoutBtn').classList.remove('hidden');

    document.getElementById('userNameDisplay').textContent = currentUser.name;
    document.getElementById('avatarDisplay').textContent = currentUser.name.charAt(0).toUpperCase();

    updateDashboard();
    renderSemesters();
}

function goToInput() {
    document.getElementById('dashboardPage').style.display = 'none';
    document.getElementById('inputPage').style.display = 'block';
    document.getElementById('resultPage').style.display = 'none';
    document.getElementById('historyPage').style.display = 'none';
    renderSemesters();
}

function backToDashboard() {
    document.getElementById('dashboardPage').style.display = 'block';
    document.getElementById('inputPage').style.display = 'none';
    document.getElementById('resultPage').style.display = 'none';
    document.getElementById('historyPage').style.display = 'none';
    updateDashboard();
}

// ================================================================
// UPDATE DASHBOARD
// ================================================================
function updateDashboard() {
    const allMatkul = SEMESTER_DATA.flatMap(s => s.matkul);
    const total = allMatkul.length;
    const filled = allMatkul.filter(m => currentNilai[m.kode]).length;

    let totalBobot = 0;
    let totalSKS = 0;
    let semesterIPKs = [];

    SEMESTER_DATA.forEach((sem, idx) => {
        let semBobot = 0;
        let semSKS = 0;
        sem.matkul.forEach(mk => {
            const nilai = currentNilai[mk.kode];
            if (nilai && NILAI_BOBOT[nilai] !== undefined) {
                semBobot += NILAI_BOBOT[nilai] * mk.sks;
                semSKS += mk.sks;
                totalBobot += NILAI_BOBOT[nilai] * mk.sks;
                totalSKS += mk.sks;
            }
        });
        const ipk = semSKS > 0 ? semBobot / semSKS : 0;
        semesterIPKs.push({ semester: idx + 1, ipk: ipk, filled: semSKS > 0 });
    });

    const ipk = totalSKS > 0 ? totalBobot / totalSKS : 0;

    document.getElementById('ipkDisplay').textContent = ipk.toFixed(2);
    document.getElementById('sksDisplay').textContent = totalSKS + ' SKS';
    document.getElementById('mkUtamaDisplay').textContent = filled + ' MK';

    const lastSem = semesterIPKs.filter(s => s.filled).pop();
    if (lastSem && lastSem.ipk > 0) {
        document.getElementById('ipkTrend').textContent = '📈 IPK ' + lastSem.ipk.toFixed(2);
        document.getElementById('ipkTrend').className = 'trend up';
    } else {
        document.getElementById('ipkTrend').textContent = '⏳ Belum ada data';
        document.getElementById('ipkTrend').className = 'trend';
    }

    document.getElementById('sksTrend').textContent = '📖 ' + totalSKS + ' dari ' + total + ' SKS';

    if (historyData.length > 0) {
        const last = historyData[0];
        document.getElementById('lastAnalysis').textContent = last.bidang;
        document.getElementById('lastAnalysisDate').textContent = '📅 ' + last.date;
    } else {
        document.getElementById('lastAnalysis').textContent = '-';
        document.getElementById('lastAnalysisDate').textContent = 'Belum ada analisis';
    }

    renderSemesterChart(semesterIPKs);
    renderDonutChart();
    renderHistoryPreview();
    renderRecommendation();
}

// ================================================================
// SEMESTER CHART
// ================================================================
function renderSemesterChart(semesterIPKs) {
    const container = document.getElementById('semesterChart');
    container.innerHTML = '';

    const maxIPK = 4.0;

    semesterIPKs.forEach((s) => {
        const bar = document.createElement('div');
        bar.className = 'semester-bar';

        const heightPercent = s.filled ? (s.ipk / maxIPK) * 100 : 0;

        let colorClass = 'primary';
        if (s.ipk >= 3.5) colorClass = 'green';
        else if (s.ipk >= 3.0) colorClass = 'primary';
        else if (s.ipk >= 2.5) colorClass = 'orange';
        else if (s.ipk > 0) colorClass = 'pink';

        bar.innerHTML = `
            <div class="value">${s.filled ? s.ipk.toFixed(2) : '-'}</div>
            <div class="bar">
                <div class="bar-fill ${colorClass}" style="height: ${heightPercent}%;"></div>
            </div>
            <div class="label">Smt ${s.semester}</div>
        `;

        container.appendChild(bar);
    });
}

// ================================================================
// DONUT CHART
// ================================================================
function renderDonutChart() {
    const container = document.getElementById('donutContainer');

    const allMatkul = SEMESTER_DATA.flatMap(s => s.matkul);
    const results = {};

    for (const [bidang, matkuls] of Object.entries(KARIR_MAP)) {
        let totalBobot = 0;
        let count = 0;
        const relevant = allMatkul.filter(m => matkuls.includes(m.name) && currentNilai[m.kode]);
        relevant.forEach(mk => {
            const nilai = currentNilai[mk.kode];
            if (nilai && NILAI_BOBOT[nilai] !== undefined) {
                totalBobot += NILAI_BOBOT[nilai];
                count++;
            }
        });
        results[bidang] = count > 0 ? Math.round((totalBobot / count / 4.0) * 100) : 0;
    }

    const sorted = Object.entries(results).sort((a, b) => b[1] - a[1]);
    const total = sorted.reduce((sum, [_, v]) => sum + v, 0) || 1;

    const size = 160;
    const strokeWidth = 20;
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;

    let html = `
        <div class="donut-chart">
            <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
    `;

    let currentOffset = 0;
    const colors = ['#8DB4D6', '#6BB5A0', '#E8A87C', '#D4A0B8', '#D6E6F2'];

    sorted.forEach(([bidang, score], idx) => {
        const percent = score / total;
        const dashArray = percent * circumference;
        const color = KARIR_COLORS[bidang] || colors[idx % colors.length];

        html += `
            <circle class="donut-segment"
                cx="${size/2}" cy="${size/2}" r="${radius}"
                stroke="${color}"
                stroke-dasharray="${dashArray} ${circumference - dashArray}"
                stroke-dashoffset="${-currentOffset}"
                stroke-linecap="round"
            />
        `;
        currentOffset += dashArray;
    });

    html += `
            </svg>
            <div class="center-text">
                <div class="big">${total}%</div>
                <div class="small">Total Skor</div>
            </div>
        </div>
        <div class="donut-legend">
    `;

    sorted.forEach(([bidang, score]) => {
        const color = KARIR_COLORS[bidang] || '#888';
        html += `
            <div class="legend-item">
                <span class="color-dot" style="background:${color};"></span>
                ${KARIR_ICON[bidang] || '📌'} ${bidang}
                <span class="percent">${score}%</span>
            </div>
        `;
    });

    html += `
        </div>
    `;

    container.innerHTML = html;
}

// ================================================================
// HISTORY PREVIEW
// ================================================================
function renderHistoryPreview() {
    const container = document.getElementById('historyPreview');

    if (historyData.length === 0) {
        container.innerHTML = `
            <div class="history-empty">
                <div class="big">📭</div>
                <p>Belum ada riwayat analisis</p>
            </div>
        `;
        return;
    }

    const preview = historyData.slice(0, 3);
    let html = '';
    preview.forEach(item => {
        html += `
            <div class="history-item">
                <div class="h-left">
                    <div class="h-title">${KARIR_ICON[item.bidang] || '📌'} ${item.bidang}</div>
                    <div class="h-date">📅 ${item.date}</div>
                </div>
                <div class="h-score">${item.skor}%</div>
            </div>
        `;
    });

    container.innerHTML = html;
}

// ================================================================
// REKOMENDASI
// ================================================================
function renderRecommendation() {
    const title = document.getElementById('recommendTitle');
    const desc = document.getElementById('recommendDesc');
    const details = document.getElementById('recommendDetails');

    if (historyData.length === 0) {
        title.textContent = 'Belum Ada Analisis';
        desc.textContent = 'Silakan input nilai dan analisis karir terlebih dahulu';
        details.innerHTML = '';
        return;
    }

    const last = historyData[0];
    title.textContent = `${KARIR_ICON[last.bidang] || '🎯'} ${last.bidang}`;
    desc.textContent = `Skor kecocokan ${last.skor}% - Peluang Tinggi!`;

    const allMatkul = SEMESTER_DATA.flatMap(s => s.matkul);
    const filled = allMatkul.filter(m => currentNilai[m.kode]).length;
    const total = allMatkul.length;

    details.innerHTML = `
        <span class="item">📊 Skor: ${last.skor}%</span>
        <span class="item">📚 ${filled}/${total} MK Diisi</span>
        <span class="item">📅 ${last.date}</span>
    `;
}

// ================================================================
// RENDER SEMESTERS (Input)
// ================================================================
function renderSemesters() {
    const container = document.getElementById('semesterContainer');
    if (!container) return;

    container.innerHTML = '';

    SEMESTER_DATA.forEach((sem, semIdx) => {
        const section = document.createElement('div');
        section.className = 'semester-section';

        const totalMatkul = sem.matkul.length;
        const filled = sem.matkul.filter(m => currentNilai[m.kode]).length;
        let statusText = '❌ Kosong';
        let statusClass = 'empty';
        if (filled === totalMatkul) {
            statusText = '✅ Lengkap';
            statusClass = 'complete';
        } else if (filled > 0) {
            statusText = '⏳ ' + filled + '/' + totalMatkul;
            statusClass = 'partial';
        }

        let headerHTML = `
            <div class="semester-header" onclick="this.nextElementSibling.style.display=this.nextElementSibling.style.display==='none'?'block':'none';this.querySelector('.chevron').classList.toggle('open');">
                <span>📚 ${sem.name}</span>
                <div style="display:flex;align-items:center;gap:12px;">
                    <span class="status-badge ${statusClass}">${statusText}</span>
                    <span class="chevron ${semIdx === 0 ? 'open' : ''}">▼</span>
                </div>
            </div>
        `;

        let bodyHTML = `<div class="semester-body" style="display:${semIdx === 0 ? 'block' : 'none'};">`;

        sem.matkul.forEach(mk => {
            const value = currentNilai[mk.kode] || '';
            bodyHTML += `
                <div class="matkul-row">
                    <span class="name">${mk.name}</span>
                    <span class="sks">${mk.sks} SKS</span>
                    <select onchange="updateNilai('${mk.kode}', this.value)">
                        <option value="">—</option>
                        ${NILAI_LIST.map(n => `<option value="${n}" ${n === value ? 'selected' : ''}>${n}</option>`).join('')}
                    </select>
                    <span class="status ${value ? 'filled' : 'empty'}">${value ? '✅' : '⬜'}</span>
                </div>
            `;
        });

        bodyHTML += `</div>`;

        section.innerHTML = headerHTML + bodyHTML;
        container.appendChild(section);
    });
}

// ================================================================
// UPDATE NILAI
// ================================================================
function updateNilai(kode, value) {
    if (value) {
        currentNilai[kode] = value;
    } else {
        delete currentNilai[kode];
    }
    localStorage.setItem('itcompass_nilai_' + currentUser.email, JSON.stringify(currentNilai));

    renderSemesters();
    updateDashboard();
}

// ================================================================
// PROSES ANALISIS
// ================================================================
function processResult() {
    const allMatkul = SEMESTER_DATA.flatMap(s => s.matkul);
    const filled = allMatkul.filter(m => currentNilai[m.kode]).length;
    const total = allMatkul.length;
    const empty = total - filled;

    if (filled === 0) {
        showToast('Isi dulu minimal 1 mata kuliah!', 'error');
        return;
    }

    if (empty > 0) {
        const confirm = window.confirm(
            `⚠️ Masih ada ${empty} mata kuliah yang belum diisi.\n\n` +
            `Analisis tetap bisa dilakukan dengan data yang ada (${filled} matkul),\n` +
            `tapi hasilnya mungkin kurang akurat.\n\n` +
            `Lanjutkan?`
        );
        if (!confirm) return;
    }

    const results = {};
    for (const [bidang, matkuls] of Object.entries(KARIR_MAP)) {
        let totalBobot = 0;
        let count = 0;
        const relevant = allMatkul.filter(m => matkuls.includes(m.name) && currentNilai[m.kode]);
        relevant.forEach(mk => {
            const nilai = currentNilai[mk.kode];
            if (nilai && NILAI_BOBOT[nilai] !== undefined) {
                totalBobot += NILAI_BOBOT[nilai];
                count++;
            }
        });
        results[bidang] = count > 0 ? Math.min(100, Math.round((totalBobot / count / 4.0) * 100)) : 0;
    }

    const sorted = Object.entries(results).sort((a, b) => b[1] - a[1]);
    const topBidang = sorted[0][0];
    const topSkor = sorted[0][1];

    lastResult = { topBidang, topSkor, results, empty, filled, total };

    historyData.unshift({
        date: new Date().toLocaleString('id-ID'),
        bidang: topBidang,
        skor: topSkor
    });
    if (historyData.length > 20) historyData.pop();
    localStorage.setItem('itcompass_history_' + currentUser.email, JSON.stringify(historyData));

    showResult();
    showToast('✅ Analisis selesai!', 'success');
}

// ================================================================
// SHOW RESULT
// ================================================================
function showResult() {
    document.getElementById('dashboardPage').style.display = 'none';
    document.getElementById('inputPage').style.display = 'none';
    document.getElementById('resultPage').style.display = 'block';
    document.getElementById('historyPage').style.display = 'none';

    const container = document.getElementById('resultContent');

    if (!lastResult) {
        container.innerHTML = '<p>Tidak ada hasil.</p>';
        return;
    }

    const { topBidang, topSkor, results, empty, filled, total } = lastResult;
    const sorted = Object.entries(results).sort((a, b) => b[1] - a[1]);

    let html = `
        <div class="result-card">
            <div class="emoji">${KARIR_ICON[topBidang] || '🎯'}</div>
            <h2>Kamu Cocok Jadi: ${topBidang}</h2>
            <div class="score">${topSkor}%</div>
            <div class="sub">Skor kecocokan tertinggi</div>
            ${empty > 0 ? `<div class="partial-warning">⚠️ Analisis berdasarkan ${filled} dari ${total} mata kuliah (${empty} belum diisi)</div>` : ''}
        </div>

        <div style="margin-bottom:24px;">
            <h4 style="font-family:'Poppins',sans-serif;font-size:16px;margin-bottom:14px;color:#2D4A6A;">📊 Detail Skor Per Bidang</h4>
    `;

    sorted.forEach(([bidang, score]) => {
        let cls = 'high';
        if (score === 0) cls = 'zero';
        else if (score < 60) cls = 'low';
        else if (score < 75) cls = 'medium';

        const displayScore = score === 0 ? '?' : score + '%';
        const color = KARIR_COLORS[bidang] || '#8DB4D6';

        html += `
            <div class="skill-bar">
                <div class="skill-label">
                    <span>${KARIR_ICON[bidang] || '📌'} ${bidang}</span>
                    <span>${displayScore}</span>
                </div>
                <div class="bar-track">
                    <div class="bar-fill ${cls}" style="width: ${score}%;background:${color};"></div>
                </div>
            </div>
        `;
    });

    html += `
        </div>

        <div class="recommendations">
            <h4>💡 Rekomendasi Pengembangan</h4>
            <ul>
                ${getRecommendations(topBidang, results, empty).map(r => `<li>${r}</li>`).join('')}
            </ul>
        </div>

        <div style="margin-top:16px;">
            <h4 style="font-family:'Poppins',sans-serif;font-size:15px;margin-bottom:10px;color:#2D4A6A;">📋 Karir Alternatif</h4>
            <div class="alternatives">
                ${sorted.slice(1,5).map(([bidang, score]) => `
                    <div class="alt-item">
                        <span class="alt-name">${KARIR_ICON[bidang] || '📌'} ${bidang}</span>
                        <span class="alt-score ${score === 0 ? 'zero' : ''}">${score === 0 ? '?' : score + '%'}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    container.innerHTML = html;
}

function getRecommendations(topBidang, results, empty) {
    const recs = {
        "Software Engineer": [
            "🎯 Perdalam Framework Backend (Laravel/Express/Django)",
            "🎯 Kuasai Database (SQL & NoSQL)",
            "🎯 Pelajari Microservices & API Design",
            "🎯 Buat Portfolio dengan Project Fullstack"
        ],
        "Cyber Security": [
            "🔐 Pelajari Ethical Hacking & Pentesting",
            "🔐 Kuasai Network Security & Cryptography",
            "🔐 Ikuti Sertifikasi CEH atau CompTIA Security+",
            "🔐 Praktek di Platform TryHackMe/HackTheBox"
        ],
        "UI/UX Designer": [
            "🎨 Kuasai Figma / Adobe XD / Sketch",
            "🎨 Pelajari Design System & Design Thinking",
            "🎨 Buat Portfolio dengan Case Study",
            "🎨 Pelajari HTML/CSS dasar untuk implementasi"
        ],
        "DevOps Engineer": [
            "☁️ Kuasai Docker & Kubernetes",
            "☁️ Pelajari CI/CD (Jenkins/GitHub Actions)",
            "☁️ Kuasai Cloud Platform (AWS/GCP/Azure)",
            "☁️ Pelajari Infrastructure as Code (Terraform)"
        ],
        "Data Scientist": [
            "📊 Pelajari Python (Pandas, NumPy, Scikit-learn)",
            "📊 Kuasai SQL & Data Visualization",
            "📊 Pelajari Machine Learning & Deep Learning",
            "📊 Ikuti kompetisi di Kaggle"
        ]
    };

    let extra = [];
    if (empty > 0) {
        extra.push(`📌 Lengkapi ${empty} mata kuliah yang masih kosong untuk hasil lebih akurat`);
    }

    const sorted = Object.entries(results).sort((a, b) => a[1] - b[1]);
    const weakest = sorted[0][0];
    const weakScore = sorted[0][1];
    if (weakScore < 60 && weakScore > 0) {
        extra.push(`📌 Tingkatkan skill di ${weakest} (skor ${weakScore}%) untuk karir yang lebih luas`);
    }

    return [...(recs[topBidang] || recs["Software Engineer"]), ...extra];
}

// ================================================================
// HISTORY
// ================================================================
function saveHistory() {
    showToast('History sudah otomatis tersimpan! 💾', 'success');
}

function showHistory() {
    document.getElementById('dashboardPage').style.display = 'none';
    document.getElementById('inputPage').style.display = 'none';
    document.getElementById('resultPage').style.display = 'none';
    document.getElementById('historyPage').style.display = 'block';

    const container = document.getElementById('historyList');

    if (historyData.length === 0) {
        container.innerHTML = `
            <div class="history-empty">
                <div class="big">📭</div>
                <p>Belum ada history konsultasi</p>
                <p style="font-size:13px;margin-top:6px;">Silakan proses hasil karir dulu!</p>
            </div>
        `;
        return;
    }

    let html = '';
    historyData.forEach(item => {
        html += `
            <div class="history-item">
                <div class="h-left">
                    <div class="h-title">${KARIR_ICON[item.bidang] || '📌'} ${item.bidang}</div>
                    <div class="h-date">📅 ${item.date}</div>
                </div>
                <div class="h-score">${item.skor}%</div>
            </div>
        `;
    });

    container.innerHTML = html;
}

// ================================================================
// THEME
// ================================================================
function toggleTheme() {
    const body = document.body;
    const btn = document.getElementById('themeToggle');
    body.classList.toggle('dark');

    if (body.classList.contains('dark')) {
        btn.textContent = '☀️';
        btn.style.background = '#3A5A7A';
        btn.style.color = '#D6E6F2';
        localStorage.setItem('itcompass_theme', 'dark');
    } else {
        btn.textContent = '🌙';
        btn.style.background = '';
        btn.style.color = '';
        localStorage.setItem('itcompass_theme', 'light');
    }
}

// ================================================================
// TOAST
// ================================================================
function showToast(message, type = 'info') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = 'toast ' + type;
    toast.classList.add('show');

    clearTimeout(toast._timeout);
    toast._timeout = setTimeout(() => {
        toast.classList.remove('show');
    }, 4000);
}

console.log('🧭 IT Compass siap digunakan!');
console.log('📚 Total Mata Kuliah:', SEMESTER_DATA.flatMap(s => s.matkul).length);
console.log('🎯 Bidang Karir:', Object.keys(KARIR_MAP).join(', '));