import{n as e}from"./rolldown-runtime-jpDsebLB.js";import{p as t,r as n}from"./vendor-Bg-CyXWx.js";var r=e(t(),1),i=[{name:`Airoli`,slug:`airoli`,compName:`SeoAiroliLocation`,varName:`seoAiroliData`},{name:`Andheri`,slug:`andheri`,compName:`SeoAndheriLocation`,varName:`seoAndheriData`},{name:`Bandra`,slug:`bandra`,compName:`SeoBandraLocation`,varName:`seoBandraData`},{name:`Borivali`,slug:`borivali`,compName:`SeoBorivaliLocation`,varName:`seoBorivaliData`},{name:`Dadar`,slug:`dadar`,compName:`SeoDadarLocation`,varName:`seoDadarData`},{name:`Ghansoli`,slug:`ghansoli`,compName:`SeoGhansoliLocation`,varName:`seoGhansoliData`},{name:`Ghatkopar`,slug:`ghatkopar`,compName:`SeoGhatkoparLocation`,varName:`seoGhatkoparData`},{name:`Goregaon`,slug:`goregaon`,compName:`SeoGoregaonLocation`,varName:`seoGoregaonData`},{name:`Jogeshwari`,slug:`jogeshwari`,compName:`SeoJogeshwariLocation`,varName:`seoJogeshwariData`},{name:`Kandivali`,slug:`kandivali`,compName:`SeoKandivaliLocation`,varName:`seoKandivaliData`},{name:`Kharghar`,slug:`kharghar`,compName:`SeoKhargharLocation`,varName:`seoKhargharData`},{name:`Koparkhairane`,slug:`koparkhairane`,compName:`SeoKoparkhairaneLocation`,varName:`seoKoparkhairaneData`},{name:`Malad`,slug:`malad`,compName:`SeoMaladLocation`,varName:`seoMaladData`},{name:`Mansarovar`,slug:`mansarovar`,compName:`SeoMansarovarLocation`,varName:`seoMansarovarData`},{name:`Mira Road`,slug:`mira-road`,compName:`SeoMiraRoadLocation`,varName:`seoMiraRoadData`},{name:`Mulund`,slug:`mulund`,compName:`SeoMulundLocation`,varName:`seoMulundData`},{name:`Mumbai`,slug:`mumbai`,compName:`SeoMumbaiLocation`,varName:`seoMumbaiData`},{name:`Navi Mumbai`,slug:`navi-mumbai`,compName:`SeoNaviMumbaiLocation`,varName:`seoNaviMumbaiData`},{name:`Nerul`,slug:`nerul`,compName:`SeoNerulLocation`,varName:`seoNerulData`},{name:`Panvel`,slug:`panvel`,compName:`SeoPanvelLocation`,varName:`seoPanvelData`},{name:`Sanpada`,slug:`sanpada`,compName:`SeoSanpadaLocation`,varName:`seoSanpadaData`},{name:`Turbhe`,slug:`turbhe`,compName:`SeoTurbheLocation`,varName:`seoTurbheData`},{name:`Vashi`,slug:`vashi`,compName:`SeoVashiLocation`,varName:`seoVashiData`}],a=n(),o=({currentLocation:e})=>{let[t,n]=(0,r.useState)(!1),o=(0,r.useRef)(null),s=i.filter(t=>t.name!==e);return(0,r.useEffect)(()=>{let e=e=>{o.current&&!o.current.contains(e.target)&&n(!1)};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[]),(0,a.jsxs)(`section`,{className:`svc-section`,style:{paddingBottom:`8rem`,position:`relative`,zIndex:9999,overflow:`visible`},children:[(0,a.jsx)(`div`,{style:{position:`absolute`,top:`50%`,left:`50%`,transform:`translate(-50%, -50%)`,width:`80%`,height:`60%`,background:`radial-gradient(circle, rgba(84, 61, 152, 0.15) 0%, rgba(0,0,0,0) 70%)`,zIndex:0,pointerEvents:`none`}}),(0,a.jsxs)(`div`,{className:`container`,style:{position:`relative`,zIndex:2},children:[(0,a.jsx)(`div`,{style:{width:`100%`,display:`flex`,justifyContent:`center`},children:(0,a.jsxs)(`h2`,{className:`svc-h2`,style:{fontSize:`clamp(2.5rem, 4vw, 4rem)`,textAlign:`center`,margin:`0 auto 3.5rem auto`,width:`100%`,padding:0},children:[`Explore More `,(0,a.jsx)(`span`,{style:{color:`var(--impulse-violet)`},children:`Locations`})]})}),(0,a.jsx)(`style`,{children:`
          .loc-dropdown-container {
            max-width: 400px;
            margin: 0 auto;
            position: relative;
            z-index: 100;
          }
          
          .loc-dropdown-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 1.2rem 2rem;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 12px;
            color: var(--white);
            cursor: pointer;
            transition: all 0.3s ease;
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            font-family: var(--font-heading);
            font-size: 1.2rem;
            letter-spacing: 0.5px;
            user-select: none;
          }

          .loc-dropdown-header:hover {
            background: rgba(255, 255, 255, 0.08);
            border-color: rgba(124, 58, 237, 0.5);
            box-shadow: 0 0 20px rgba(124, 58, 237, 0.15);
          }

          .loc-dropdown-icon {
            transition: transform 0.3s ease;
          }

          .loc-dropdown-icon.open {
            transform: rotate(180deg);
          }

          .loc-dropdown-list {
            position: absolute;
            bottom: calc(100% + 0.5rem);
            top: auto;
            left: 0;
            width: 100%;
            background: #0f0f0f;
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 12px;
            max-height: 250px;
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
            opacity: 0;
            visibility: hidden;
            pointer-events: none;
            transform: translateY(10px);
            transition: all 0.3s ease;
            box-shadow: 0 -10px 40px rgba(0, 0, 0, 0.9);
            overscroll-behavior: contain;
            z-index: 101;
          }

          .loc-dropdown-list.open {
            opacity: 1;
            visibility: visible;
            pointer-events: auto;
            transform: translateY(0);
          }

          /* Custom Scrollbar for dropdown */
          .loc-dropdown-list::-webkit-scrollbar {
            width: 8px;
          }
          .loc-dropdown-list::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.02);
            border-radius: 8px;
            margin: 4px 0;
          }
          .loc-dropdown-list::-webkit-scrollbar-thumb {
            background: rgba(124, 58, 237, 0.6);
            border-radius: 8px;
            border: 2px solid rgba(15, 15, 15, 0.98);
          }
          .loc-dropdown-list::-webkit-scrollbar-thumb:hover {
            background: rgba(124, 58, 237, 0.9);
          }

          .loc-dropdown-item {
            display: block;
            padding: 1rem 2rem;
            color: rgba(255, 255, 255, 0.85);
            text-decoration: none;
            font-family: var(--font-heading);
            font-size: 1.1rem;
            transition: all 0.2s ease;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          }

          .loc-dropdown-item:last-child {
            border-bottom: none;
          }

          .loc-dropdown-item:hover {
            background: rgba(124, 58, 237, 0.15);
            color: #fff;
            padding-left: 2.5rem;
          }
        `}),(0,a.jsxs)(`div`,{className:`loc-dropdown-container`,ref:o,children:[(0,a.jsxs)(`div`,{className:`loc-dropdown-header`,onClick:()=>n(!t),children:[(0,a.jsx)(`span`,{children:`Select a Location`}),(0,a.jsx)(`svg`,{className:`loc-dropdown-icon ${t?`open`:``}`,width:`24`,height:`24`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,a.jsx)(`polyline`,{points:`6 9 12 15 18 9`})})]}),(0,a.jsx)(`div`,{className:`loc-dropdown-list ${t?`open`:``}`,children:s.map(e=>(0,a.jsx)(`a`,{href:`/brand-infrastructure/search-engine-optimisation/${e.slug}/`,className:`loc-dropdown-item`,children:e.name},e.slug))})]})]})]})};export{o as t};