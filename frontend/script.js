/* ============================================
   ANN HAR Dashboard — Interactivity & Data
   ============================================ */

// ──── Classification Data ────
const dataV1 = [
  { name: "ApplyEyeMakeup", precision: 0.4808, recall: 0.5682, f1: 0.5208, support: 44 },
  { name: "ApplyLipstick", precision: 0.5238, recall: 0.6875, f1: 0.5946, support: 32 },
  { name: "Archery", precision: 0.5385, recall: 0.3415, f1: 0.4179, support: 41 },
  { name: "BabyCrawling", precision: 0.6735, recall: 0.9429, f1: 0.7857, support: 35 },
  { name: "BandMarching", precision: 0.9487, recall: 0.8605, f1: 0.9024, support: 43 },
  { name: "BaseballPitch", precision: 0.7561, recall: 0.8378, f1: 0.7949, support: 37 },
  { name: "Basketball", precision: 0.4839, recall: 0.4286, f1: 0.4545, support: 35 },
  { name: "BenchPress", precision: 0.9048, recall: 0.7917, f1: 0.8444, support: 48 },
  { name: "Biking", precision: 0.8125, recall: 0.7879, f1: 0.8000, support: 33 },
  { name: "Billiards", precision: 0.9756, recall: 1.0000, f1: 0.9877, support: 40 },
  { name: "BlowDryHair", precision: 0.3830, recall: 0.4737, f1: 0.4235, support: 38 },
  { name: "BlowingCandles", precision: 0.6744, recall: 0.8788, f1: 0.7632, support: 33 },
  { name: "Bowling", precision: 1.0000, recall: 0.8837, f1: 0.9383, support: 43 },
  { name: "BoxingPunchingBag", precision: 0.4667, recall: 0.4286, f1: 0.4468, support: 49 },
  { name: "BreastStroke", precision: 0.9200, recall: 0.8214, f1: 0.8679, support: 28 },
  { name: "BrushingTeeth", precision: 0.4074, recall: 0.3056, f1: 0.3492, support: 36 },
  { name: "CleanAndJerk", precision: 0.3871, recall: 0.7273, f1: 0.5053, support: 33 },
  { name: "CricketBowling", precision: 0.5106, recall: 0.6667, f1: 0.5783, support: 36 },
  { name: "CricketShot", precision: 0.5000, recall: 0.5306, f1: 0.5149, support: 49 },
  { name: "CuttingInKitchen", precision: 0.8571, recall: 0.9091, f1: 0.8824, support: 33 },
  { name: "Diving", precision: 0.7321, recall: 0.9762, f1: 0.8367, support: 42 },
  { name: "Drumming", precision: 0.9355, recall: 0.6744, f1: 0.7838, support: 43 },
  { name: "Fencing", precision: 0.8158, recall: 0.9118, f1: 0.8611, support: 34 },
  { name: "FieldHockeyPenalty", precision: 0.4821, recall: 0.6750, f1: 0.5625, support: 40 },
  { name: "FloorGymnastics", precision: 0.6279, recall: 0.7500, f1: 0.6835, support: 36 },
  { name: "FrisbeeCatch", precision: 0.7037, recall: 0.5135, f1: 0.5938, support: 37 },
  { name: "GolfSwing", precision: 0.6364, recall: 0.4667, f1: 0.5385, support: 30 },
  { name: "Haircut", precision: 0.3385, recall: 0.6667, f1: 0.4490, support: 33 },
  { name: "HammerThrow", precision: 0.5366, recall: 0.9778, f1: 0.6929, support: 45 },
  { name: "Hammering", precision: 0.8333, recall: 0.4545, f1: 0.5882, support: 33 },
  { name: "HeadMassage", precision: 0.6571, recall: 0.5610, f1: 0.6053, support: 41 },
  { name: "HighJump", precision: 0.6190, recall: 0.3514, f1: 0.4483, support: 37 },
  { name: "HorseRiding", precision: 0.9792, recall: 0.9592, f1: 0.9691, support: 49 },
  { name: "HulaHoop", precision: 0.7647, recall: 0.3824, f1: 0.5098, support: 34 },
  { name: "IceDancing", precision: 0.8627, recall: 0.9565, f1: 0.9072, support: 46 },
  { name: "JavelinThrow", precision: 0.3043, recall: 0.2258, f1: 0.2593, support: 31 },
  { name: "JugglingBalls", precision: 0.5957, recall: 0.7000, f1: 0.6437, support: 40 },
  { name: "JumpRope", precision: 0.3871, recall: 0.3636, f1: 0.3750, support: 33 },
  { name: "JumpingJack", precision: 0.7692, recall: 0.5405, f1: 0.6349, support: 37 },
  { name: "Kayaking", precision: 0.6875, recall: 0.6111, f1: 0.6471, support: 36 },
  { name: "Knitting", precision: 0.9091, recall: 0.8824, f1: 0.8955, support: 34 },
  { name: "LongJump", precision: 0.7353, recall: 0.6410, f1: 0.6849, support: 39 },
  { name: "Lunges", precision: 0.9000, recall: 0.2571, f1: 0.4000, support: 35 },
  { name: "Mixing", precision: 0.7556, recall: 0.7556, f1: 0.7556, support: 45 },
  { name: "MoppingFloor", precision: 0.5556, recall: 0.7353, f1: 0.6329, support: 34 },
  { name: "Nunchucks", precision: 0.3333, recall: 0.1429, f1: 0.2000, support: 35 },
  { name: "ParallelBars", precision: 0.6600, recall: 0.8919, f1: 0.7586, support: 37 },
  { name: "PizzaTossing", precision: 0.4242, recall: 0.4242, f1: 0.4242, support: 33 },
  { name: "PlayingDaf", precision: 0.9200, recall: 0.5610, f1: 0.6970, support: 41 },
  { name: "PlayingFlute", precision: 0.7705, recall: 0.9792, f1: 0.8624, support: 48 },
  { name: "PlayingGuitar", precision: 1.0000, recall: 0.7674, f1: 0.8684, support: 43 },
  { name: "PlayingPiano", precision: 0.7568, recall: 1.0000, f1: 0.8615, support: 28 },
  { name: "PlayingTabla", precision: 1.0000, recall: 0.7097, f1: 0.8302, support: 31 },
  { name: "PlayingViolin", precision: 0.5897, recall: 0.8214, f1: 0.6866, support: 28 },
  { name: "PoleVault", precision: 0.7083, recall: 0.8500, f1: 0.7727, support: 40 },
  { name: "PommelHorse", precision: 0.7600, recall: 0.5588, f1: 0.6441, support: 34 },
  { name: "PullUps", precision: 0.4250, recall: 0.6296, f1: 0.5075, support: 27 },
  { name: "Punch", precision: 0.8974, recall: 0.8974, f1: 0.8974, support: 39 },
  { name: "PushUps", precision: 0.5000, recall: 0.5000, f1: 0.5000, support: 30 },
  { name: "Rafting", precision: 0.9583, recall: 0.8214, f1: 0.8846, support: 28 },
  { name: "RockClimbingIndoor", precision: 0.9189, recall: 0.9444, f1: 0.9315, support: 36 },
  { name: "Rowing", precision: 0.7143, recall: 0.9722, f1: 0.8235, support: 36 },
  { name: "SalsaSpin", precision: 0.8947, recall: 0.3953, f1: 0.5484, support: 43 },
  { name: "ShavingBeard", precision: 0.5143, recall: 0.4186, f1: 0.4615, support: 43 },
  { name: "Shotput", precision: 0.5909, recall: 0.2826, f1: 0.3824, support: 46 },
  { name: "SkateBoarding", precision: 0.6774, recall: 0.6563, f1: 0.6667, support: 32 },
  { name: "Skiing", precision: 0.5263, recall: 0.7500, f1: 0.6186, support: 40 },
  { name: "Skijet", precision: 0.9231, recall: 0.8571, f1: 0.8889, support: 28 },
  { name: "SkyDiving", precision: 0.7561, recall: 1.0000, f1: 0.8611, support: 31 },
  { name: "SoccerPenalty", precision: 0.8000, recall: 0.9756, f1: 0.8791, support: 41 },
  { name: "SumoWrestling", precision: 0.9677, recall: 0.8824, f1: 0.9231, support: 34 },
  { name: "Surfing", precision: 0.8611, recall: 0.9394, f1: 0.8986, support: 33 },
  { name: "Swing", precision: 1.0000, recall: 0.4390, f1: 0.6102, support: 41 },
  { name: "TaiChi", precision: 0.5882, recall: 0.3571, f1: 0.4444, support: 28 },
  { name: "TennisSwing", precision: 0.6923, recall: 0.8372, f1: 0.7579, support: 43 },
  { name: "ThrowDiscus", precision: 0.4118, recall: 0.3684, f1: 0.3889, support: 38 },
  { name: "Typing", precision: 0.8039, recall: 0.9535, f1: 0.8723, support: 43 },
  { name: "UnevenBars", precision: 0.8000, recall: 0.7143, f1: 0.7547, support: 28 },
  { name: "VolleyballSpiking", precision: 0.6429, recall: 0.8182, f1: 0.7200, support: 33 },
  { name: "WalkingWithDog", precision: 0.5714, recall: 0.4706, f1: 0.5161, support: 34 },
  { name: "WritingOnBoard", precision: 0.8431, recall: 0.9556, f1: 0.8958, support: 45 },
  { name: "YoYo", precision: 0.6316, recall: 0.3333, f1: 0.4364, support: 36 }
];

const dataV2 = [
  { name: "ApplyEyeMakeup", precision: 0.6522, recall: 0.3409, f1: 0.4478, support: 44 },
  { name: "ApplyLipstick", precision: 0.5319, recall: 0.7813, f1: 0.6329, support: 32 },
  { name: "Archery", precision: 0.7083, recall: 0.4146, f1: 0.5231, support: 41 },
  { name: "BabyCrawling", precision: 0.6226, recall: 0.9429, f1: 0.7500, support: 35 },
  { name: "BandMarching", precision: 0.8125, recall: 0.9070, f1: 0.8571, support: 43 },
  { name: "BaseballPitch", precision: 0.5714, recall: 0.8649, f1: 0.6882, support: 37 },
  { name: "Basketball", precision: 0.6071, recall: 0.4857, f1: 0.5397, support: 35 },
  { name: "BenchPress", precision: 0.6200, recall: 0.6458, f1: 0.6327, support: 48 },
  { name: "Biking", precision: 0.6818, recall: 0.9091, f1: 0.7792, support: 33 },
  { name: "Billiards", precision: 1.0000, recall: 1.0000, f1: 1.0000, support: 40 },
  { name: "BlowDryHair", precision: 0.5882, recall: 0.2632, f1: 0.3636, support: 38 },
  { name: "BlowingCandles", precision: 0.7333, recall: 0.6667, f1: 0.6984, support: 33 },
  { name: "Bowling", precision: 0.7407, recall: 0.9302, f1: 0.8247, support: 43 },
  { name: "BoxingPunchingBag", precision: 0.6389, recall: 0.4694, f1: 0.5412, support: 49 },
  { name: "BreastStroke", precision: 0.8519, recall: 0.8214, f1: 0.8364, support: 28 },
  { name: "BrushingTeeth", precision: 0.2222, recall: 0.2222, f1: 0.2222, support: 36 },
  { name: "CleanAndJerk", precision: 0.5405, recall: 0.6061, f1: 0.5714, support: 33 },
  { name: "CricketBowling", precision: 0.2727, recall: 0.5833, f1: 0.3717, support: 36 },
  { name: "CricketShot", precision: 0.3871, recall: 0.2449, f1: 0.3000, support: 49 },
  { name: "CuttingInKitchen", precision: 0.8571, recall: 0.9091, f1: 0.8824, support: 33 },
  { name: "Diving", precision: 0.9070, recall: 0.9286, f1: 0.9176, support: 42 },
  { name: "Drumming", precision: 0.6875, recall: 0.5116, f1: 0.5867, support: 43 },
  { name: "Fencing", precision: 0.7381, recall: 0.9118, f1: 0.8158, support: 34 },
  { name: "FieldHockeyPenalty", precision: 0.6154, recall: 0.2000, f1: 0.3019, support: 40 },
  { name: "FloorGymnastics", precision: 0.7647, recall: 0.7222, f1: 0.7429, support: 36 },
  { name: "FrisbeeCatch", precision: 0.5882, recall: 0.5405, f1: 0.5634, support: 37 },
  { name: "GolfSwing", precision: 0.4651, recall: 0.6667, f1: 0.5479, support: 30 },
  { name: "Haircut", precision: 0.3542, recall: 0.5152, f1: 0.4198, support: 33 },
  { name: "HammerThrow", precision: 0.7429, recall: 0.5778, f1: 0.6500, support: 45 },
  { name: "Hammering", precision: 0.4615, recall: 0.3636, f1: 0.4068, support: 33 },
  { name: "HeadMassage", precision: 0.7813, recall: 0.6098, f1: 0.6849, support: 41 },
  { name: "HighJump", precision: 0.7857, recall: 0.2973, f1: 0.4314, support: 37 },
  { name: "HorseRiding", precision: 0.8246, recall: 0.9592, f1: 0.8868, support: 49 },
  { name: "HulaHoop", precision: 0.9333, recall: 0.4118, f1: 0.5714, support: 34 },
  { name: "IceDancing", precision: 0.8824, recall: 0.9783, f1: 0.9278, support: 46 },
  { name: "JavelinThrow", precision: 0.5806, recall: 0.5806, f1: 0.5806, support: 31 },
  { name: "JugglingBalls", precision: 0.5556, recall: 0.6250, f1: 0.5882, support: 40 },
  { name: "JumpRope", precision: 0.1111, recall: 0.0909, f1: 0.1000, support: 33 },
  { name: "JumpingJack", precision: 0.2642, recall: 0.3784, f1: 0.3111, support: 37 },
  { name: "Kayaking", precision: 0.7105, recall: 0.7500, f1: 0.7297, support: 36 },
  { name: "Knitting", precision: 0.9200, recall: 0.6765, f1: 0.7797, support: 34 },
  { name: "LongJump", precision: 0.8500, recall: 0.4359, f1: 0.5763, support: 39 },
  { name: "Lunges", precision: 0.2500, recall: 0.4000, f1: 0.3077, support: 35 },
  { name: "Mixing", precision: 0.7000, recall: 0.7778, f1: 0.7368, support: 45 },
  { name: "MoppingFloor", precision: 0.4706, recall: 0.7059, f1: 0.5647, support: 34 },
  { name: "Nunchucks", precision: 0.5000, recall: 0.2857, f1: 0.3636, support: 35 },
  { name: "ParallelBars", precision: 0.7949, recall: 0.8378, f1: 0.8158, support: 37 },
  { name: "PizzaTossing", precision: 0.2069, recall: 0.1818, f1: 0.1935, support: 33 },
  { name: "PlayingDaf", precision: 0.8250, recall: 0.8049, f1: 0.8148, support: 41 },
  { name: "PlayingFlute", precision: 0.7547, recall: 0.8333, f1: 0.7921, support: 48 },
  { name: "PlayingGuitar", precision: 0.8919, recall: 0.7674, f1: 0.8250, support: 43 },
  { name: "PlayingPiano", precision: 0.7813, recall: 0.8929, f1: 0.8333, support: 28 },
  { name: "PlayingTabla", precision: 0.9615, recall: 0.8065, f1: 0.8772, support: 31 },
  { name: "PlayingViolin", precision: 1.0000, recall: 0.5357, f1: 0.6977, support: 28 },
  { name: "PoleVault", precision: 0.8750, recall: 0.7000, f1: 0.7778, support: 40 },
  { name: "PommelHorse", precision: 0.7647, recall: 0.3824, f1: 0.5098, support: 34 },
  { name: "PullUps", precision: 0.3421, recall: 0.4815, f1: 0.4000, support: 27 },
  { name: "Punch", precision: 0.7021, recall: 0.8462, f1: 0.7674, support: 39 },
  { name: "PushUps", precision: 0.7647, recall: 0.4333, f1: 0.5532, support: 30 },
  { name: "Rafting", precision: 0.8800, recall: 0.7857, f1: 0.8302, support: 28 },
  { name: "RockClimbingIndoor", precision: 0.6122, recall: 0.8333, f1: 0.7059, support: 36 },
  { name: "Rowing", precision: 0.5373, recall: 1.0000, f1: 0.6990, support: 36 },
  { name: "SalsaSpin", precision: 0.6735, recall: 0.7674, f1: 0.7174, support: 43 },
  { name: "ShavingBeard", precision: 0.5610, recall: 0.5349, f1: 0.5476, support: 43 },
  { name: "Shotput", precision: 0.5294, recall: 0.1957, f1: 0.2857, support: 46 },
  { name: "SkateBoarding", precision: 0.9524, recall: 0.6250, f1: 0.7547, support: 32 },
  { name: "Skiing", precision: 0.5088, recall: 0.7250, f1: 0.5979, support: 40 },
  { name: "Skijet", precision: 0.7241, recall: 0.7500, f1: 0.7368, support: 28 },
  { name: "SkyDiving", precision: 1.0000, recall: 0.7742, f1: 0.8727, support: 31 },
  { name: "SoccerPenalty", precision: 0.8163, recall: 0.9756, f1: 0.8889, support: 41 },
  { name: "SumoWrestling", precision: 0.8205, recall: 0.9412, f1: 0.8767, support: 34 },
  { name: "Surfing", precision: 0.8333, recall: 0.9091, f1: 0.8696, support: 33 },
  { name: "Swing", precision: 0.6809, recall: 0.7805, f1: 0.7273, support: 41 },
  { name: "TaiChi", precision: 0.4643, recall: 0.4643, f1: 0.4643, support: 28 },
  { name: "TennisSwing", precision: 0.6765, recall: 0.5349, f1: 0.5974, support: 43 },
  { name: "ThrowDiscus", precision: 0.4516, recall: 0.7368, f1: 0.5600, support: 38 },
  { name: "Typing", precision: 0.8864, recall: 0.9070, f1: 0.8966, support: 43 },
  { name: "UnevenBars", precision: 0.7353, recall: 0.8929, f1: 0.8065, support: 28 },
  { name: "VolleyballSpiking", precision: 0.7941, recall: 0.8182, f1: 0.8060, support: 33 },
  { name: "WalkingWithDog", precision: 0.6571, recall: 0.6765, f1: 0.6667, support: 34 },
  { name: "WritingOnBoard", precision: 0.6508, recall: 0.9111, f1: 0.7593, support: 45 },
  { name: "YoYo", precision: 0.7000, recall: 0.1944, f1: 0.3043, support: 36 }
];

const modelSummary = {
  v1: { accuracy: 0.6827, macroP: 0.6971, macroR: 0.6797, macroF1: 0.6708, weightedP: 0.7010, weightedR: 0.6827, weightedF1: 0.6742 },
  v2: { accuracy: 0.6491, macroP: 0.6695, macroR: 0.6481, macroF1: 0.6388, weightedP: 0.6712, weightedR: 0.6491, weightedF1: 0.6403 }
};

// ──── State ────
let currentModel = 'v1';
let sortCol = 'f1';
let sortDir = -1; // -1 = descending
let searchQuery = '';

// ──── Helpers ────
function getData() { return currentModel === 'v1' ? dataV1 : dataV2; }
function getSummary() { return modelSummary[currentModel]; }

function getF1Class(f1) {
  if (f1 >= 0.8) return 'f1-excellent';
  if (f1 >= 0.6) return 'f1-good';
  if (f1 >= 0.4) return 'f1-fair';
  return 'f1-poor';
}

function getF1Color(f1) {
  if (f1 >= 0.8) return '#34d399';
  if (f1 >= 0.6) return '#3b82f6';
  if (f1 >= 0.4) return '#fbbf24';
  return '#f87171';
}

// ──── Table Rendering ────
function renderTable() {
  const data = getData();
  const summary = getSummary();

  let filtered = data.filter(d => d.name.toLowerCase().includes(searchQuery));
  filtered.sort((a, b) => {
    let va = sortCol === 'name' ? a.name.toLowerCase() : a[sortCol];
    let vb = sortCol === 'name' ? b.name.toLowerCase() : b[sortCol];
    if (va < vb) return -1 * sortDir;
    if (va > vb) return 1 * sortDir;
    return 0;
  });

  const tbody = document.getElementById('class-table-body');
  tbody.innerHTML = filtered.map(d => `
    <tr>
      <td class="class-name">${d.name}</td>
      <td>${d.precision.toFixed(4)}</td>
      <td>${d.recall.toFixed(4)}</td>
      <td>
        <div class="metric-bar-cell ${getF1Class(d.f1)}">
          <div class="metric-bar"><div class="metric-bar-fill" style="width:${(d.f1 * 100).toFixed(1)}%"></div></div>
          <span class="metric-val">${d.f1.toFixed(4)}</span>
        </div>
      </td>
      <td>${d.support}</td>
    </tr>
  `).join('');

  // Update footer
  document.getElementById('table-count').textContent = `Showing ${filtered.length} of ${data.length} classes`;
  document.getElementById('table-summary').textContent =
    `Accuracy: ${(summary.accuracy * 100).toFixed(2)}% · Macro F1: ${(summary.macroF1 * 100).toFixed(2)}%`;

  // Update sort indicators
  document.querySelectorAll('.data-table th').forEach(th => {
    th.classList.toggle('sorted', th.dataset.sort === sortCol);
    const icon = th.querySelector('.sort-icon');
    if (th.dataset.sort === sortCol) {
      icon.textContent = sortDir === 1 ? '▲' : '▼';
    } else {
      icon.textContent = '▲';
    }
  });
}

// ──── Top / Bottom Performers ────
function renderPerformers() {
  const data = [...getData()].sort((a, b) => b.f1 - a.f1);
  const top5 = data.slice(0, 5);
  const bottom5 = data.slice(-5).reverse();

  const renderList = (items, containerId) => {
    document.getElementById(containerId).innerHTML = items.map((d, i) => `
      <li class="performer-item">
        <span class="performer-rank">${i + 1}</span>
        <span class="performer-name">${d.name}</span>
        <span class="performer-f1" style="color:${getF1Color(d.f1)}">${(d.f1 * 100).toFixed(1)}%</span>
      </li>
    `).join('');
  };

  renderList(top5, 'top-performers');
  renderList(bottom5, 'bottom-performers');
}

// ──── F1 Chart (Canvas) ────
function renderF1Chart() {
  const canvas = document.getElementById('f1-chart');
  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;

  const rect = canvas.parentElement.getBoundingClientRect();
  canvas.width = (rect.width - 48) * dpr;
  canvas.height = 320 * dpr;
  canvas.style.width = (rect.width - 48) + 'px';
  canvas.style.height = '320px';
  ctx.scale(dpr, dpr);

  const w = rect.width - 48;
  const h = 320;
  const data = [...getData()].sort((a, b) => b.f1 - a.f1);
  const barW = Math.max(2, (w - 60) / data.length - 1);
  const gap = 1;
  const maxF1 = 1.0;
  const chartH = h - 50;
  const chartY = 10;

  ctx.clearRect(0, 0, w, h);

  // Grid lines
  for (let i = 0; i <= 5; i++) {
    const y = chartY + chartH - (chartH * (i * 0.2));
    ctx.strokeStyle = 'rgba(255,255,255,0.06)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(40, y);
    ctx.lineTo(w, y);
    ctx.stroke();

    ctx.fillStyle = 'rgba(255,255,255,0.35)';
    ctx.font = '10px Inter, system-ui';
    ctx.textAlign = 'right';
    ctx.fillText((i * 20) + '%', 35, y + 3);
  }

  // Bars
  data.forEach((d, i) => {
    const x = 45 + i * (barW + gap);
    const barH = (d.f1 / maxF1) * chartH;
    const y = chartY + chartH - barH;

    const color = getF1Color(d.f1);
    ctx.fillStyle = color;
    ctx.globalAlpha = 0.85;

    // Rounded top
    const r = Math.min(barW / 2, 3);
    ctx.beginPath();
    ctx.moveTo(x, y + r);
    ctx.arcTo(x, y, x + barW, y, r);
    ctx.arcTo(x + barW, y, x + barW, y + barH, r);
    ctx.lineTo(x + barW, chartY + chartH);
    ctx.lineTo(x, chartY + chartH);
    ctx.closePath();
    ctx.fill();
    ctx.globalAlpha = 1;
  });
}

// ──── Animated Counters ────
function animateCounters() {
  const counters = document.querySelectorAll('[data-count]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const el = entry.target;
      if (el.dataset.animated) return;
      el.dataset.animated = '1';

      const target = parseFloat(el.dataset.count);
      const suffix = el.dataset.suffix || '';
      const decimals = parseInt(el.dataset.decimals || '0');
      const duration = 1200;
      const start = performance.now();

      function step(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        // Ease-out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = target * eased;

        if (decimals > 0) {
          el.textContent = current.toFixed(decimals) + suffix;
        } else {
          el.textContent = Math.round(current).toLocaleString() + suffix;
        }

        if (progress < 1) requestAnimationFrame(step);
      }

      requestAnimationFrame(step);
      observer.unobserve(el);
    });
  }, { threshold: 0.3 });

  counters.forEach(c => observer.observe(c));
}

// ──── Scroll Reveal ────
function setupReveal() {
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  reveals.forEach(el => observer.observe(el));
}

// ──── Tab Switching ────
function setupTabs() {
  document.querySelectorAll('.tabs').forEach(tabGroup => {
    tabGroup.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        tabGroup.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const panelId = btn.dataset.tab;
        const parent = tabGroup.parentElement;
        parent.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
        document.getElementById(panelId).classList.add('active');
      });
    });
  });
}

// ──── Model Toggle ────
function setupModelToggle() {
  document.querySelectorAll('#model-toggle .toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#model-toggle .toggle-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentModel = btn.dataset.model;
      renderTable();
      renderPerformers();
      renderF1Chart();
    });
  });
}

// ──── Table Sorting ────
function setupTableSort() {
  document.querySelectorAll('.data-table th[data-sort]').forEach(th => {
    th.addEventListener('click', () => {
      const col = th.dataset.sort;
      if (sortCol === col) {
        sortDir *= -1;
      } else {
        sortCol = col;
        sortDir = col === 'name' ? 1 : -1;
      }
      renderTable();
    });
  });
}

// ──── Search ────
function setupSearch() {
  const input = document.getElementById('class-search');
  input.addEventListener('input', () => {
    searchQuery = input.value.toLowerCase().trim();
    renderTable();
  });
}

// ──── Navbar scroll effect ────
function setupNavbar() {
  const navbar = document.getElementById('navbar');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const scroll = window.scrollY;
    if (scroll > 60) {
      navbar.style.background = 'rgba(14, 16, 22, 0.88)';
    } else {
      navbar.style.background = 'rgba(14, 16, 22, 0.72)';
    }
    lastScroll = scroll;
  }, { passive: true });
}

// ──── Live Inference / Upload ────
function setupInference() {
  const zone = document.getElementById('upload-zone');
  const input = document.getElementById('video-input');
  const preview = document.getElementById('upload-preview');
  const btn = document.getElementById('predict-btn');
  const modelSelect = document.getElementById('model-select');
  const zoneContent = document.getElementById('upload-zone-content');
  
  const resultsEmpty = document.getElementById('results-empty');
  const resultsContent = document.getElementById('results-content');
  const resultsError = document.getElementById('results-error');
  const resultsList = document.getElementById('results-list');
  const modelBadge = document.getElementById('results-model-badge');

  let currentFile = null;

  const originalContentHTML = zoneContent.innerHTML;

  // Click to upload
  zone.addEventListener('click', () => {
    input.click();
  });

  input.addEventListener('change', (e) => {
    if (e.target.files.length > 0) {
      handleFile(e.target.files[0]);
      input.value = ''; // Reset value to allow re-uploading the same file
    }
  });

  // Drag and drop
  zone.addEventListener('dragover', (e) => {
    e.preventDefault();
    zone.classList.add('drag-over');
  });

  zone.addEventListener('dragleave', (e) => {
    e.preventDefault();
    zone.classList.remove('drag-over');
  });

  zone.addEventListener('drop', (e) => {
    e.preventDefault();
    zone.classList.remove('drag-over');
    if (e.dataTransfer.files.length > 0) {
      handleFile(e.dataTransfer.files[0]);
    }
  });

  function handleFile(file) {
    const isAvi = file.name.toLowerCase().endsWith('.avi');
    
    // Windows sometimes returns empty MIME type for .avi files, so we check extension too
    if (!file.type.startsWith('video/') && !isAvi) {
      showError('Please upload a valid video file.');
      return;
    }
    
    currentFile = file;
    
    if (isAvi) {
      // Display a clean placeholder since browsers don't support .avi playback
      zone.classList.remove('has-video');
      preview.src = '';
      preview.style.display = 'none';
      
      zoneContent.innerHTML = `
        <div class="upload-icon" style="color: var(--accent-violet);">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <rect x="3" y="3" width="18" height="12" rx="2"/>
            <path d="M9 3v12"/>
          </svg>
        </div>
        <p class="upload-text" style="word-break: break-all; padding: 0 var(--space-md);">${file.name}</p>
        <p class="upload-subtext" style="color: var(--warning); font-weight: 600;">AVI format ready for prediction</p>
        <p class="upload-subtext" style="margin-top: 4px; font-size: 0.75rem;">(Browser preview not supported for AVI)</p>
      `;
    } else {
      // Standard video format (MP4, WebM)
      zoneContent.innerHTML = originalContentHTML;
      preview.style.display = 'block';
      
      const url = URL.createObjectURL(file);
      preview.src = url;
      preview.load();
      preview.play().catch(err => console.log('Auto-play blocked or failed:', err));
      zone.classList.add('has-video');
    }
    
    btn.disabled = false;
    
    // Reset results
    resultsEmpty.style.display = 'flex';
    resultsContent.style.display = 'none';
    resultsError.style.display = 'none';
  }

  // Predict
  btn.addEventListener('click', async () => {
    if (!currentFile) return;

    btn.disabled = true;
    btn.classList.add('loading');
    
    resultsEmpty.style.display = 'none';
    resultsContent.style.display = 'none';
    resultsError.style.display = 'none';

    const formData = new FormData();
    formData.append('video', currentFile);
    formData.append('model', modelSelect.value);

    try {
      const res = await fetch('/predict', {
        method: 'POST',
        body: formData
      });
      
      const data = await res.json();
      
      if (!res.ok) throw new Error(data.error || 'Server error');
      
      modelBadge.textContent = data.model;
      resultsList.innerHTML = data.predictions.map((p, i) => `
        <li class="result-item">
          <span class="result-rank">${i + 1}</span>
          <span class="result-name">${p.class}</span>
          <div class="result-bar-wrap">
            <div class="result-bar"><div class="result-bar-fill" style="width: ${p.confidence}%"></div></div>
            <span class="result-confidence">${p.confidence}%</span>
          </div>
        </li>
      `).join('');
      
      resultsContent.style.display = 'block';
    } catch (err) {
      showError(err.message);
    } finally {
      btn.disabled = false;
      btn.classList.remove('loading');
    }
  });

  function showError(msg) {
    resultsEmpty.style.display = 'none';
    resultsContent.style.display = 'none';
    resultsError.style.display = 'flex';
    document.getElementById('results-error-text').textContent = msg;
  }
}

// ──── Resize handler for chart ────
function setupResize() {
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => renderF1Chart(), 200);
  });
}

// ──── Initialize ────
document.addEventListener('DOMContentLoaded', () => {
  renderTable();
  renderPerformers();
  renderF1Chart();
  animateCounters();
  setupReveal();
  setupTabs();
  setupModelToggle();
  setupTableSort();
  setupSearch();
  setupNavbar();
  setupResize();
  setupInference();
});
