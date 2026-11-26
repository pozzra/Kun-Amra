/* ==========================================================================
   KUN AMRA PORTFOLIO — INTERACTIVE ANIMATIONS & IT DIAGNOSTICS ENGINE
   ========================================================================== */

(() => {
  'use strict';

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ------------------------------------------------------------------------
     0. i18n — Multi-Language Engine (EN default, KH, CH, VN)
     ------------------------------------------------------------------------ */
  const translations = {
    en: {
      nav_about: 'About',
      nav_lab: 'Topology Lab',
      nav_skills: 'Skills',
      nav_experience: 'Experience',
      nav_education: 'Education',
      nav_contact: 'Contact',
      hero_status: 'AVAILABLE FOR HIRE • PHNOM PENH, CAMBODIA',
      hero_eyebrow: "Hello, I'm",
      hero_lead: 'Information Technology Bachelor’s graduate (ITI) and hands-on field technician from KTC Engineering. I deploy resilient network infrastructure, secure VLAN & surveillance systems, and keep enterprise workstations running at peak uptime.',
      cta_hire: 'Hire / Contact Me',
      cta_lab: 'Explore Live Network Lab',
      cta_cover: 'Cover Letter',
      btn_download_cv: 'Download CV',
      btn_cover_letter: 'Cover Letter',
      btn_cover_letter_read: 'Read Cover Letter',
      btn_dl_cv_full: 'Download Full CV (PDF)',
      btn_view_cover: 'View Cover Letter',
      btn_copy: 'Copy',
      btn_close: 'Close',
      btn_cancel: 'Cancel',
      metric_degree: 'B.Tech IT Graduate (ITI)',
      metric_domains: 'Core IT & Net Domains',
      metric_uptime: 'Uptime & Field Focus',
      hud_online: 'ONLINE',
      hud_k_degree: 'DEGREE',
      hud_v_degree: 'B.Tech in IT',
      hud_k_specialty: 'SPECIALTY',
      hud_v_specialty: 'Routing & CCTV',
      hud_k_base: 'BASE',
      hud_v_base: 'Mean Chey, PP',
      s1_tag: '01 // PROFILE BRIEFING',
      s1_title: 'Bridging Field Engineering & Enterprise IT Uptime',
      about_h3: 'About Me',
      about_p1: 'I am a passionate Information Technology graduate holding both a <strong>Technical Higher Diploma</strong> and a <strong>Bachelor of Technology in IT</strong> from the <strong>Industrial Technical Institute (ITI)</strong> in Phnom Penh. Combined with real-world field experience as a <strong>CCTV &amp; Network Technician at KTC Engineering</strong>, I bring a strong balance of theoretical networking foundations and hands-on deployment capability.',
      about_p2: 'From configuring routers, Layer 2/3 switches, VLAN segmentation, and wireless APs to automating Windows OS deployments, terminating Cat5e/Cat6 cabling, and aligning NVR/DVR surveillance backups, I adapt quickly to infrastructure standards and stay committed to network stability and security.',
      about_hl1: 'Zero-to-ready workstation setup, partitioning & domain integration',
      about_hl2: 'Fast diagnostics for IP conflicts, link drops & physical cabling faults',
      about_hl3: 'Continuous learner researching modern infrastructure & security tools',
      lang_panel_h3: 'Languages',
      lang_kh_name: 'Khmer',
      lang_kh_sub: 'Native Language',
      lang_kh_badge: 'Native',
      lang_en_name: 'English',
      lang_en_sub: 'Reading, Listening & Speaking',
      lang_en_badge: 'Conversational / Basic',
      base_panel_h3: 'Deployment Base',
      base_address: 'Sangkat Mean Chey, Khan Mean Chey,<br />Phnom Penh, Cambodia',
      role_tag_1: 'IT Support Officer',
      role_tag_2: 'Network Technician',
      role_tag_3: 'CCTV Technician',
      s2_tag: '02 // INTERACTIVE ARCHITECTURE LAB',
      s2_title: 'Live Infrastructure & Troubleshooting Simulator',
      s2_sub: 'Switch operational scenarios below to inspect how I design, segment, and troubleshoot enterprise networks and CCTV surveillance topologies.',
      lab_tab_normal: 'Normal Operations',
      lab_tab_vlan: 'VLAN & Bandwidth QoS',
      lab_tab_conflict: 'IP Conflict & Drop Fix',
      lab_tab_cctv: 'CCTV NVR Backup Stream',
      stat_latency: 'LATENCY',
      stat_loss: 'PACKET LOSS',
      stat_speed: 'LINK SPEED',
      s3_tag: '03 // TECHNICAL ARSENAL',
      s3_title: 'Skills & Interactive NOC Terminal',
      filter_all: 'All Competencies',
      filter_network: 'Networking & Security',
      filter_systems: 'Systems & OS',
      filter_cctv: 'CCTV & Cabling',
      skill1_title: 'Network Administration',
      skill1_desc: 'Routers, Layer 2/3 switches, wireless APs, TCP/IP, DHCP & IP subnetting.',
      skill2_title: 'Network Security & VLAN',
      skill2_desc: 'VLAN segmentation, traffic isolation & bandwidth allocation for surveillance and offices.',
      skill3_title: 'Hardware & OS Deployment',
      skill3_desc: 'Automated Windows OS setups, drive partitioning, workstation mapping & local domain integration.',
      skill4_title: 'CCTV & NVR/DVR Systems',
      skill4_desc: 'Site layout planning, analog & IP camera mounting/alignment, and secure NVR/DVR video backup.',
      skill5_title: 'Cat5e/Cat6 & Diagnostics',
      skill5_desc: 'Structured cabling, RJ45 termination, rack patching, cable testing, and IP conflict resolution.',
      skill6_title: 'Productivity & Reporting',
      skill6_desc: 'Microsoft Office Suite for network topology documentation, asset inventories & incident reports.',
      term_welcome_1: 'Welcome to Kun Amra Interactive IT Console v2.6',
      term_welcome_2: 'Click a command pill above or type <span class="t-accent">help</span> and press Enter.',
      term_ph: 'type command (e.g. help, skills, ping ktc-switch)...',
      s4_tag: '04 // FIELD OPERATIONS',
      s4_title: 'Professional & Technical Experience',
      exp1_badge: 'Enterprise & Field Deployment',
      exp1_title: 'CCTV & Network Technician',
      exp1_org: 'KTC Engineering • Phnom Penh, Cambodia',
      exp1_op1_t: 'Network Infrastructure',
      exp1_op1_d: 'Installed and configured routers, switches, access points, and workstation IP parameters (TCP/IP, DHCP).',
      exp1_op2_t: 'Surveillance Deployment',
      exp1_op2_d: 'Planned site layouts, mounted and aligned analog & IP cameras, and configured NVR/DVR storage for secure video backups.',
      exp1_op3_t: 'System & Operating Setup',
      exp1_op3_d: 'Automated Windows OS setups, managed drive partitioning, and connected client workstations to shared network resources.',
      exp1_op4_t: 'Field Troubleshooting',
      exp1_op4_d: 'Diagnosed network connectivity drops, IP conflicts, and installed/tested Cat5e/Cat6 Ethernet cabling.',
      exp2_date: 'ACADEMIC LAB PROJECTS',
      exp2_badge: 'Institute Lab & Teamwork',
      exp2_title: 'CCTV & Network Technician (Lab / School Projects)',
      exp2_org: 'Industrial Technical Institute (ITI) • Phnom Penh, Cambodia',
      exp2_op1_t: 'Hardware Configuration',
      exp2_op1_d: 'Configured routers, switches, and client IP addresses for multi-node network lab topologies.',
      exp2_op2_t: 'Troubleshooting',
      exp2_op2_d: 'Identified and resolved IP conflicts and faulty network cabling during hands-on team deployments.',
      exp2_op3_t: 'Team Collaboration',
      exp2_op3_d: 'Coordinated closely with team members on technical implementation tasks and strict project deadlines.',
      s5_tag: '05 // ACADEMIC CREDENTIALS',
      s5_title: 'Education & Official Certifications',
      s5_sub: 'Formal technical education approved by the Ministry of Labour and Vocational Training (MLVT), with inspectable official certificates.',
      edu1_badge: 'Verified Degree',
      edu1_title: 'Bachelor of Technology in Information Technology',
      edu1_school: 'Industrial Technical Institute (ITI), Phnom Penh, Cambodia',
      edu1_li1: 'Exam Session: October 06, 2025',
      edu1_li2: 'Provisional Certificate Issued: September 21, 2026',
      edu1_btn: 'Inspect Official Certificate',
      edu1_cert_title: 'Bachelor of Technology in Information Technology — Provisional Certificate',
      edu1_cert_sub: 'Industrial Technical Institute (ITI) • Exam Session: October 06, 2025',
      edu2_badge: 'MLVT Approved',
      edu2_title: 'Technical Higher Diploma in Information Technology',
      edu2_school: 'Industrial Technical Institute (ITI), Phnom Penh, Cambodia',
      edu2_li1: 'Exam Session: November 20, 2023',
      edu2_li2: 'Approved by Ministry of Labour and Vocational Training (Issued April 29, 2024)',
      edu2_btn: 'Inspect Official Diploma',
      edu2_cert_title: 'Technical Higher Diploma in Information Technology',
      edu2_cert_sub: 'Industrial Technical Institute (ITI) • Ministry of Labour and Vocational Training',
      edu3_badge: 'Grade 12',
      edu3_title: 'High School Diploma',
      edu3_school: 'Hun Sen Cheung Chnok High School',
      edu4_badge: 'Grade 9',
      edu4_title: 'Secondary School',
      edu4_school: 'Chealea Secondary School',
      s6_tag: '06 // DISPATCH & REFERENCE',
      s6_title: 'Connect for IT Support & Network Roles',
      contact_h3: 'Direct Channels',
      contact_intro: 'Ready for immediate interviews and technical assessments in Phnom Penh. Reach out directly via phone or email, or download the full CV packet.',
      ch_phone: 'Phone (Call or Telegram)',
      ch_email: 'Email',
      ch_location: 'Location',
      ch_location_val: 'Sangkat Mean Chey, Khan Mean Chey, Phnom Penh',
      ref_tag: 'PROFESSIONAL REFERENCE',
      ref_badge: 'Verified',
      ref_role: 'Vice President of IT Department',
      ref_tel_prefix: 'Tel:',
      form_h3: 'Send Interview / Inquiry Dispatch',
      form_sub: 'Compose your message below to open an instant pre-filled email draft to Kun Amra.',
      form_label_name: 'Your Name / Organization',
      form_ph_name: 'e.g. HR Team — Enterprise IT',
      form_label_subject: 'Role / Topic',
      form_ph_subject: 'e.g. Interview Invitation — IT Support Officer',
      form_label_msg: 'Message',
      form_ph_msg: 'Share role details, interview schedule, or technical requirements...',
      form_submit: 'Launch Email Dispatch',
      footer_role: '• IT Support Officer & Network Technician',
      footer_meta: 'Phnom Penh, Cambodia • Built from verified credentials in <a href="Kun Amra.pdf" target="_blank" rel="noopener">Kun Amra.pdf</a>',
      back_top: '↑ TOP',
      modal_cert_kicker: 'VERIFIED ACADEMIC CREDENTIAL',
      cert_default_title: 'Official Certificate',
      cert_zoom_in: 'Zoom In',
      cert_zoom_out: 'Zoom Out',
      modal_cover_kicker: 'OFFICIAL APPLICATION DOCUMENT',
      modal_cover_title: 'Cover Letter — IT Support Officer',
      modal_cover_sub: 'Kun Amra • Phnom Penh, Cambodia • 069-524-314',
      letter_salutation: 'Dear Hiring Manager,',
      letter_p1: 'I am writing to formally express my interest in the <strong>IT Support Officer</strong> position. As an Information Technology graduate holding a <strong>Technical Higher Diploma</strong> and a <strong>Bachelor of Technology</strong> from <strong>Industrial Technical Institute (ITI)</strong>, along with hands-on technical experience at <strong>KTC Engineering</strong>, I bring a strong mix of theoretical knowledge and field capability.',
      letter_cap_h4: 'Core IT Support Capabilities:',
      letter_cap_1: '<strong>Network Administration:</strong> Installing and configuring routers, Layer 2/3 switches, wireless APs, DHCP, and subnetting.',
      letter_cap_2: '<strong>System Deployment:</strong> Windows OS setup, drive partitioning, workstation mapping, and local domain integration.',
      letter_cap_3: '<strong>Hardware &amp; Troubleshooting:</strong> Resolving IP conflicts, network drops, and executing physical Cat5e/Cat6 cabling and terminations.',
      letter_cap_4: '<strong>Network &amp; Security Operations:</strong> Implementing basic VLAN segmentation and bandwidth allocation for surveillance and enterprise networks.',
      letter_p2: 'I am a quick learner who adapts easily to new infrastructure guidelines and is fully committed to ensuring high network uptime and security.',
      letter_p3: 'Thank you for your time and consideration. I look forward to the opportunity to discuss my qualifications further in an interview.',
      letter_sign: 'Sincerely,<br /><strong>Kun Amra</strong>',
      letter_dl_btn: 'Download Full CV + Letter (PDF)',
      modal_phone_kicker: 'CONNECT VIA PHONE',
      phone_opt1_title: '1. Call Phone',
      phone_opt2_title: '2. Open Telegram',
      phone_copy_btn: 'Copy Number',
      phone_dial_prefix: 'Dial ',
      toast_theme_dark: 'Theme switched to DARK mode',
      toast_theme_light: 'Theme switched to LIGHT mode',
      toast_copied: 'Copied to clipboard: ',
      toast_email_open: 'Opening email client with pre-filled dispatch...',
      roles: ['IT Support Officer', 'Network Technician', 'CCTV & Infrastructure Specialist'],
      scenarios: {
        normal: {
          code: 'MODE // STEADY_STATE',
          badge: 'UPTIME 99.98%',
          title: 'Balanced Enterprise & Surveillance Fabric',
          desc: 'Clean separation between office workstations (VLAN 10), IP/Analog CCTV cameras feeding NVR storage (VLAN 20), and wireless access points (VLAN 30) over certified Cat6 cabling.',
          logs: [
            ['ok', '[PASS]', 'Router DHCP pool healthy (192.168.1.50 - .200)'],
            ['ok', '[PASS]', 'NVR recording active across all IP/Analog channels'],
            ['ok', '[PASS]', 'Cat5e/Cat6 terminations verified • 0 CRC errors'],
          ],
        },
        vlan: {
          code: 'MODE // VLAN_QOS_POLICY',
          badge: 'SEGMENTED',
          title: 'VLAN Segmentation & Bandwidth Allocation',
          desc: 'Broadcast domains isolated via 802.1Q VLAN tagging on Layer 2/3 switches. Bandwidth limits keep wireless traffic from saturating critical NVR surveillance streams and domain workstations.',
          logs: [
            ['info', '[VLAN 10]', 'Workstations mapped to local domain & shared drives'],
            ['info', '[VLAN 20]', 'Guaranteed bandwidth reserved for CCTV NVR uplink'],
            ['ok', '[QoS]', 'AP guest/staff traffic throttled cleanly within policy'],
          ],
        },
        conflict: {
          code: 'MODE // INCIDENT_REMEDIATION',
          badge: 'RESOLVED',
          title: 'IP Conflict & Connectivity Drop Diagnostics',
          desc: 'Detected duplicate static IP on VLAN 10 workstation and loose RJ45 patch termination. Isolated port, reassigned DHCP reservation, re-terminated Cat6 connector, and restored zero-loss link.',
          logs: [
            ['warn', '[ALERT]', 'Duplicate ARP conflict detected on 10.10.10.42 -> isolated'],
            ['info', '[TRACE]', 'Tested Cat6 run; re-crimped RJ45 T568B termination'],
            ['ok', '[FIXED]', 'DHCP lease bound to MAC; workstation ping stable'],
          ],
        },
        cctv: {
          code: 'MODE // SURVEILLANCE_BACKUP',
          badge: 'REC ACTIVE',
          title: 'CCTV Site Alignment & NVR/DVR Redundancy',
          desc: 'Site camera angles aligned for zero blind spots across analog and IP cameras. Dual-stream feeds routed into NVR/DVR storage arrays with verified retention and continuous backup health.',
          logs: [
            ['info', '[SITE]', 'IP & Analog camera FOV verified with clean night clarity'],
            ['ok', '[NVR]', 'Storage array healthy • continuous video backup verified'],
            ['ok', '[NET]', 'Dedicated surveillance VLAN preventing packet congestion'],
          ],
        },
      },
    },
    kh: {
      nav_about: 'អំពីខ្ញុំ',
      nav_lab: 'Lab បណ្ដាញ',
      nav_skills: 'ជំនាញ',
      nav_experience: 'បទពិសោធន៍',
      nav_education: 'ការអប់រំ',
      nav_contact: 'ទំនាក់ទំនង',
      hero_status: 'ត្រៀមខ្លួនសម្រាប់ការងារ • ភ្នំពេញ, កម្ពុជា',
      hero_eyebrow: 'សួស្ដី, ខ្ញុំឈ្មោះ',
      hero_lead: 'និស្សិតបញ្ចប់ការសិក្សាបរិញ្ញាបត្របច្ចេកវិទ្យាព័ត៌មាន (ITI) និងជាអ្នកបច្ចេកទេសផ្ទាល់ពី KTC Engineering។ ខ្ញុំដំឡើងហេដ្ឋារចនាសម្ព័ន្ធបណ្ដាញរឹងមាំ ប្រព័ន្ធ VLAN និងកាមេរ៉ាសុវត្ថិភាព ព្រមទាំងរក្សាស្ថានីយការងារឱ្យដំណើរការប្រកបដោយស្ថិរភាពខ្ពស់។',
      cta_hire: 'ទំនាក់ទំនង / ជ្រើសរើស',
      cta_lab: 'ស្វែងយល់ Lab បណ្ដាញ',
      cta_cover: 'លិខិតស្នើសុំ',
      btn_download_cv: 'ទាញយក CV',
      btn_cover_letter: 'លិខិតស្នើសុំ',
      btn_cover_letter_read: 'អានលិខិតស្នើសុំការងារ',
      btn_dl_cv_full: 'ទាញយក CV ពេញលេញ (PDF)',
      btn_view_cover: 'មើលលិខិតស្នើសុំ',
      btn_copy: 'ចម្លង',
      btn_close: 'បិទ',
      btn_cancel: 'បោះបង់',
      metric_degree: 'បរិញ្ញាបត្រ IT (ITI)',
      metric_domains: 'ជំនាញ IT និងបណ្ដាញស្នូល',
      metric_uptime: 'ស្ថិរភាព និងការងារវាល',
      hud_online: 'អនឡាញ',
      hud_k_degree: 'កម្រិតសិក្សា',
      hud_v_degree: 'បរិញ្ញាបត្រ IT',
      hud_k_specialty: 'ជំនាញ',
      hud_v_specialty: 'បណ្ដាញ & CCTV',
      hud_k_base: 'ទីតាំង',
      hud_v_base: 'មានជ័យ, ភ្នំពេញ',
      s1_tag: '01 // សង្ខេបប្រវត្តិរូប',
      s1_title: 'ផ្សារភ្ជាប់វិស្វកម្មវាល និងស្ថិរភាព IT សហគ្រាស',
      about_h3: 'អំពីខ្ញុំ',
      about_p1: 'ខ្ញុំជានិស្សិតបញ្ចប់ការសិក្សាផ្នែកបច្ចេកវិទ្យាព័ត៌មាន ដែលមានសញ្ញាបត្រ <strong>បរិញ្ញាបត្ររងបច្ចេកទេស</strong> និង <strong>បរិញ្ញាបត្របច្ចេកវិទ្យាព័ត៌មាន</strong> ពី <strong>វិទ្យាស្ថានបច្ចេកទេសឧស្សាហកម្ម (ITI)</strong> នៅរាជធានីភ្នំពេញ។ រួមផ្សំជាមួយបទពិសោធន៍ការងារផ្ទាល់ជា <strong>អ្នកបច្ចេកទេស CCTV និងបណ្ដាញនៅ KTC Engineering</strong> ខ្ញុំមានទាំងមូលដ្ឋានទ្រឹស្ដីបណ្ដាញរឹងមាំ និងសមត្ថភាពអនុវត្តផ្ទាល់។',
      about_p2: 'ចាប់ពីការកំណត់រចនាសម្ព័ន្ធ Router, Switch ស្រទាប់ទី 2/3, ការបែងចែក VLAN និង Wireless AP រហូតដល់ការដំឡើង Windows OS ដោយស្វ័យប្រវត្តិ ការគាបខ្សែ Cat5e/Cat6 និងការរៀបចំប្រព័ន្ធបម្រុងទុក NVR/DVR ខ្ញុំសម្របខ្លួនបានរហ័សតាមស្តង់ដារហេដ្ឋារចនាសម្ព័ន្ធ និងប្ដេជ្ញាធានាស្ថិរភាព និងសុវត្ថិភាពបណ្ដាញ។',
      about_hl1: 'ដំឡើងស្ថានីយការងារពីដំបូង បែងចែកថាសរឹង និងភ្ជាប់ Domain',
      about_hl2: 'វិភាគរហ័សលើបញ្ហាជាន់ IP ការដាច់បណ្ដាញ និងបញ្ហាខ្សែរូបវន្ត',
      about_hl3: 'រៀនសូត្រជាប់លាប់អំពីហេដ្ឋារចនាសម្ព័ន្ធ និងឧបករណ៍សុវត្ថិភាពទំនើប',
      lang_panel_h3: 'ភាសា',
      lang_kh_name: 'ខ្មែរ',
      lang_kh_sub: 'ភាសាកំណើត',
      lang_kh_badge: 'ភាសាកំណើត',
      lang_en_name: 'អង់គ្លេស',
      lang_en_sub: 'អាន ស្តាប់ និងនិយាយ',
      lang_en_badge: 'សន្ទនា / មូលដ្ឋាន',
      base_panel_h3: 'ទីតាំងប្រតិបត្តិការ',
      base_address: 'សង្កាត់មានជ័យ, ខណ្ឌមានជ័យ,<br />រាជធានីភ្នំពេញ, កម្ពុជា',
      role_tag_1: 'មន្ត្រីជំនួយ IT',
      role_tag_2: 'អ្នកបច្ចេកទេសបណ្ដាញ',
      role_tag_3: 'អ្នកបច្ចេកទេស CCTV',
      s2_tag: '02 // មន្ទីរពិសោធន៍ស្ថាបត្យកម្មអន្តរកម្ម',
      s2_title: 'កម្មវិធីក្លែងធ្វើហេដ្ឋារចនាសម្ព័ន្ធ និងដោះស្រាយបញ្ហាផ្ទាល់',
      s2_sub: 'ប្តូរសេណារីយ៉ូខាងក្រោម ដើម្បីពិនិត្យមើលរបៀបដែលខ្ញុំរចនា បែងចែក VLAN និងដោះស្រាយបញ្ហាបណ្ដាញសហគ្រាស និងប្រព័ន្ធ CCTV។',
      lab_tab_normal: 'ប្រតិបត្តិការធម្មតា',
      lab_tab_vlan: 'VLAN & គុណភាពសេវា QoS',
      lab_tab_conflict: 'ជួសជុលជាន់ IP & ដាច់បណ្ដាញ',
      lab_tab_cctv: 'ការផ្សាយបម្រុងទុក CCTV NVR',
      stat_latency: 'ភាពយឺតយ៉ាវ (LATENCY)',
      stat_loss: 'ការបាត់បង់កញ្ចប់',
      stat_speed: 'ល្បឿនតំណភ្ជាប់',
      s3_tag: '03 // ឃ្លាំងជំនាញបច្ចេកទេស',
      s3_title: 'ជំនាញ និង NOC Terminal អន្តរកម្ម',
      filter_all: 'ជំនាញទាំងអស់',
      filter_network: 'បណ្ដាញ និងសុវត្ថិភាព',
      filter_systems: 'ប្រព័ន្ធ និង OS',
      filter_cctv: 'CCTV និងការដាក់ខ្សែ',
      skill1_title: 'ការគ្រប់គ្រងបណ្ដាញ',
      skill1_desc: 'Router, Layer 2/3 Switch, Wireless AP, TCP/IP, DHCP និងការបែងចែក Subnet។',
      skill2_title: 'សុវត្ថិភាពបណ្ដាញ និង VLAN',
      skill2_desc: 'ការបែងចែក VLAN ការកាត់ផ្ដាច់ចរាចរណ៍ និងការបែងចែកកម្រិតបញ្ជូនសម្រាប់កាមេរ៉ា និងការិយាល័យ។',
      skill3_title: 'ផ្នែករឹង និងដំឡើងប្រព័ន្ធ OS',
      skill3_desc: 'ដំឡើង Windows OS ដោយស្វ័យប្រវត្តិ ចែក Partition ភ្ជាប់ម៉ាស៊ីន និង Domain ក្នុងតំបន់។',
      skill4_title: 'ប្រព័ន្ធ CCTV & NVR/DVR',
      skill4_desc: 'រៀបចំប្លង់ទីតាំង ដំឡើង និងតម្រឹមកាមេរ៉ា Analog/IP និងរក្សាទុកវីដេអូលើ NVR/DVR។',
      skill5_title: 'ខ្សែ Cat5e/Cat6 & ការវិភាគបញ្ហា',
      skill5_desc: 'រៀបចំប្រព័ន្ធខ្សែ គាបក្បាល RJ45 តភ្ជាប់ Rack តេស្តខ្សែ និងដោះស្រាយបញ្ហាជាន់ IP។',
      skill6_title: 'ផលិតភាព និងការរៀបចំរបាយការណ៍',
      skill6_desc: 'ប្រើប្រាស់ Microsoft Office សម្រាប់ឯកសារបណ្ដាញ បញ្ជីសារពើភណ្ឌ និងរបាយការណ៍ឧប្បត្តិហេតុ។',
      term_welcome_1: 'សូមស្វាគមន៍មកកាន់ផ្ទាំងបញ្ជា IT អន្តរកម្ម Kun Amra v2.6',
      term_welcome_2: 'ចុចប៊ូតុងពាក្យបញ្ជាខាងលើ ឬវាយ <span class="t-accent">help</span> រួចចុច Enter។',
      term_ph: 'វាយពាក្យបញ្ជា (ឧ. help, skills, ping ktc-switch)...',
      s4_tag: '04 // ប្រតិបត្តិការវាល',
      s4_title: 'បទពិសោធន៍វិជ្ជាជីវៈ និងបច្ចេកទេស',
      exp1_badge: 'ការដំឡើងនៅសហគ្រាស និងវាល',
      exp1_title: 'អ្នកបច្ចេកទេស CCTV និងបណ្ដាញ',
      exp1_org: 'KTC Engineering • ភ្នំពេញ, កម្ពុជា',
      exp1_op1_t: 'ហេដ្ឋារចនាសម្ព័ន្ធបណ្ដាញ',
      exp1_op1_d: 'ដំឡើង និងកំណត់រចនាសម្ព័ន្ធ Router, Switch, Access Point និង IP ម៉ាស៊ីនការងារ (TCP/IP, DHCP)។',
      exp1_op2_t: 'ការដំឡើងប្រព័ន្ធកាមេរ៉ាសុវត្ថិភាព',
      exp1_op2_d: 'រៀបចំប្លង់ទីតាំង ដំឡើង និងតម្រឹមកាមេរ៉ា Analog/IP និងកំណត់ការផ្ទុក NVR/DVR សម្រាប់បម្រុងទុកវីដេអូ។',
      exp1_op3_t: 'ការរៀបចំប្រព័ន្ធ និងកម្មវិធី',
      exp1_op3_d: 'ដំឡើង Windows OS ដោយស្វ័យប្រវត្តិ ចែក Partition និងភ្ជាប់ស្ថានីយការងារទៅធនធានបណ្ដាញរួម។',
      exp1_op4_t: 'ការដោះស្រាយបញ្ហានៅកន្លែងផ្ទាល់',
      exp1_op4_d: 'វិភាគបញ្ហាដាច់បណ្ដាញ ការជាន់ IP និងដំឡើង/តេស្តខ្សែ Ethernet Cat5e/Cat6។',
      exp2_date: 'គម្រោងមន្ទីរពិសោធន៍សិក្សា',
      exp2_badge: 'Lab វិទ្យាស្ថាន និងការងារជាក្រុម',
      exp2_title: 'អ្នកបច្ចេកទេស CCTV និងបណ្ដាញ (គម្រោង Lab / សាលា)',
      exp2_org: 'វិទ្យាស្ថានបច្ចេកទេសឧស្សាហកម្ម (ITI) • ភ្នំពេញ, កម្ពុជា',
      exp2_op1_t: 'ការកំណត់រចនាសម្ព័ន្ធផ្នែករឹង',
      exp2_op1_d: 'កំណត់ Router, Switch និងអាសយដ្ឋាន IP សម្រាប់ប្រព័ន្ធ Lab បណ្ដាញច្រើនចំណុច។',
      exp2_op2_t: 'ការដោះស្រាយបញ្ហា',
      exp2_op2_d: 'ស្វែងរក និងជួសជុលបញ្ហាជាន់ IP និងខ្សែបណ្ដាញមានបញ្ហាកំឡុងពេលអនុវត្តជាក្រុម។',
      exp2_op3_t: 'ការសហការជាក្រុម',
      exp2_op3_d: 'សម្របសម្រួលយ៉ាងជិតស្និទ្ធជាមួយសមាជិកក្រុមលើការអនុវត្តបច្ចេកទេស និងពេលវេលាកំណត់។',
      s5_tag: '05 // សញ្ញាបត្រសិក្សា',
      s5_title: 'ការអប់រំ និងវិញ្ញាបនបត្រផ្លូវការ',
      s5_sub: 'ការអប់រំបច្ចេកទេសផ្លូវការដែលទទួលស្គាល់ដោយក្រសួងការងារ និងបណ្ដុះបណ្ដាលវិជ្ជាជីវៈ (MLVT) ជាមួយវិញ្ញាបនបត្រអាចពិនិត្យបាន។',
      edu1_badge: 'សញ្ញាបត្របញ្ជាក់ត្រឹមត្រូវ',
      edu1_title: 'បរិញ្ញាបត្របច្ចេកវិទ្យាព័ត៌មាន (B.Tech IT)',
      edu1_school: 'វិទ្យាស្ថានបច្ចេកទេសឧស្សាហកម្ម (ITI), ភ្នំពេញ, កម្ពុជា',
      edu1_li1: 'សម័យប្រឡង៖ ថ្ងៃទី ០៦ ខែតុលា ឆ្នាំ ២០២៥',
      edu1_li2: 'វិញ្ញាបនបត្របណ្ដោះអាសន្នចេញថ្ងៃទី ២១ ខែកញ្ញា ឆ្នាំ ២០២៦',
      edu1_btn: 'ពិនិត្យវិញ្ញាបនបត្រផ្លូវការ',
      edu1_cert_title: 'បរិញ្ញាបត្របច្ចេកវិទ្យាព័ត៌មាន — វិញ្ញាបនបត្របណ្ដោះអាសន្ន',
      edu1_cert_sub: 'វិទ្យាស្ថានបច្ចេកទេសឧស្សាហកម្ម (ITI) • សម័យប្រឡង៖ ០៦ តុលា ២០២៥',
      edu2_badge: 'ទទួលស្គាល់ដោយ MLVT',
      edu2_title: 'បរិញ្ញាបត្ររងបច្ចេកទេសព័ត៌មានវិទ្យា',
      edu2_school: 'វិទ្យាស្ថានបច្ចេកទេសឧស្សាហកម្ម (ITI), ភ្នំពេញ, កម្ពុជា',
      edu2_li1: 'សម័យប្រឡង៖ ថ្ងៃទី ២០ ខែវិច្ឆិកា ឆ្នាំ ២០២៣',
      edu2_li2: 'អនុម័តដោយក្រសួងការងារ និងបណ្ដុះបណ្ដាលវិជ្ជាជីវៈ (ចេញថ្ងៃទី ២៩ មេសា ២០២៤)',
      edu2_btn: 'ពិនិត្យសញ្ញាបត្រផ្លូវការ',
      edu2_cert_title: 'បរិញ្ញាបត្ររងបច្ចេកទេសព័ត៌មានវិទ្យា',
      edu2_cert_sub: 'វិទ្យាស្ថានបច្ចេកទេសឧស្សាហកម្ម (ITI) • ក្រសួងការងារ និងបណ្ដុះបណ្ដាលវិជ្ជាជីវៈ',
      edu3_badge: 'ថ្នាក់ទី ១២',
      edu3_title: 'សញ្ញាបត្រមធ្យមសិក្សាទុតិយភូមិ (បាក់ឌុប)',
      edu3_school: 'វិទ្យាល័យ ហ៊ុន សែន ជើងច្នុក',
      edu4_badge: 'ថ្នាក់ទី ៩',
      edu4_title: 'មធ្យមសិក្សាបឋមភូមិ',
      edu4_school: 'អនុវិទ្យាល័យ ជាលា',
      s6_tag: '06 // ទំនាក់ទំនង និងអ្នកធានាអះអាង',
      s6_title: 'ភ្ជាប់ទំនាក់ទំនងសម្រាប់តួនាទី IT Support & Network',
      contact_h3: 'បណ្ដាញទំនាក់ទំនងផ្ទាល់',
      contact_intro: 'ត្រៀមខ្លួនសម្រាប់ការសម្ភាសន៍ និងការវាយតម្លៃបច្ចេកទេសភ្លាមៗនៅរាជធានីភ្នំពេញ។ ទាក់ទងផ្ទាល់តាមទូរស័ព្ទ ឬអ៊ីមែល ឬទាញយកប្រវត្តិរូបពេញ។',
      ch_phone: 'ទូរស័ព្ទ (តេផ្ទាល់ ឬ Telegram)',
      ch_email: 'អ៊ីមែល',
      ch_location: 'ទីតាំង',
      ch_location_val: 'សង្កាត់មានជ័យ, ខណ្ឌមានជ័យ, រាជធានីភ្នំពេញ',
      ref_tag: 'អ្នកធានាអះអាងវិជ្ជាជីវៈ',
      ref_badge: 'បានផ្ទៀងផ្ទាត់',
      ref_role: 'អនុប្រធាននាយកដ្ឋាន IT',
      ref_tel_prefix: 'ទូរស័ព្ទ៖',
      form_h3: 'ផ្ញើសារសុំសម្ភាសន៍ / សាកសួរព័ត៌មាន',
      form_sub: 'សរសេរសារខាងក្រោម ដើម្បីបើកអ៊ីមែលដែលបានបំពេញជាស្រេចទៅកាន់ Kun Amra។',
      form_label_name: 'ឈ្មោះ / ស្ថាប័នរបស់អ្នក',
      form_ph_name: 'ឧ. ក្រុមការងារ HR — ក្រុមហ៊ុន Enterprise IT',
      form_label_subject: 'តួនាទី / ប្រធានបទ',
      form_ph_subject: 'ឧ. លិខិតអញ្ជើញសម្ភាសន៍ — មន្ត្រីជំនួយ IT',
      form_label_msg: 'សារ',
      form_ph_msg: 'ចែករំលែកព័ត៌មានតួនាទី កាលវិភាគសម្ភាសន៍ ឬតម្រូវការបច្ចេកទេស...',
      form_submit: 'បើកកម្មវិធីផ្ញើអ៊ីមែល',
      footer_role: '• មន្ត្រីជំនួយ IT និងអ្នកបច្ចេកទេសបណ្ដាញ',
      footer_meta: 'ភ្នំពេញ, កម្ពុជា • បង្កើតពីព័ត៌មានផ្ទៀងផ្ទាត់ក្នុង <a href="Kun Amra.pdf" target="_blank" rel="noopener">Kun Amra.pdf</a>',
      back_top: '↑ ឡើងលើ',
      modal_cert_kicker: 'វិញ្ញាបនបត្រសិក្សាដែលបានផ្ទៀងផ្ទាត់',
      cert_default_title: 'វិញ្ញាបនបត្រផ្លូវការ',
      cert_zoom_in: 'ពង្រីក',
      cert_zoom_out: 'បង្រួម',
      modal_cover_kicker: 'ឯកសារដាក់ពាក្យផ្លូវការ',
      modal_cover_title: 'លិខិតស្នើសុំការងារ — មន្ត្រីជំនួយ IT',
      modal_cover_sub: 'Kun Amra • ភ្នំពេញ, កម្ពុជា • 069-524-314',
      letter_salutation: 'ជូនចំពោះប្រធានគ្រប់គ្រងការជ្រើសរើសបុគ្គលិក,',
      letter_p1: 'ខ្ញុំសូមសម្ដែងនូវចំណាប់អារម្មណ៍ជាផ្លូវការក្នុងការដាក់ពាក្យសម្រាប់តួនាទីជា <strong>មន្ត្រីជំនួយ IT (IT Support Officer)</strong>។ ក្នុងនាមជានិស្សិតបញ្ចប់ការសិក្សាផ្នែកព័ត៌មានវិទ្យា ដែលមានសញ្ញាបត្រ <strong>បរិញ្ញាបត្ររងបច្ចេកទេស</strong> និង <strong>បរិញ្ញាបត្របច្ចេកវិទ្យា</strong> ពី <strong>វិទ្យាស្ថានបច្ចេកទេសឧស្សាហកម្ម (ITI)</strong> ព្រមទាំងបទពិសោធន៍ការងារជាក់ស្ដែងនៅ <strong>KTC Engineering</strong> ខ្ញុំមានចំណេះដឹងទ្រឹស្ដី និងសមត្ថភាពអនុវត្តផ្ទាល់យ៉ាងរឹងមាំ។',
      letter_cap_h4: 'សមត្ថភាពស្នូលផ្នែក IT Support៖',
      letter_cap_1: '<strong>ការគ្រប់គ្រងបណ្ដាញ៖</strong> ដំឡើង និងកំណត់រចនាសម្ព័ន្ធ Router, Switch ស្រទាប់ទី 2/3, Wireless AP, DHCP និងការបែងចែក Subnet។',
      letter_cap_2: '<strong>ការដំឡើងប្រព័ន្ធ៖</strong> ដំឡើង Windows OS, ចែក Partition, ភ្ជាប់ស្ថានីយការងារ និងបញ្ចូលក្នុង Domain មូលដ្ឋាន។',
      letter_cap_3: '<strong>ផ្នែករឹង និងដោះស្រាយបញ្ហា៖</strong> ដោះស្រាយការជាន់ IP ការដាច់បណ្ដាញ និងការគាបខ្សែបណ្ដាញ Cat5e/Cat6។',
      letter_cap_4: '<strong>ប្រតិបត្តិការបណ្ដាញ និងសុវត្ថិភាព៖</strong> អនុវត្តការបែងចែក VLAN និងគ្រប់គ្រងកម្រិតបញ្ជូនសម្រាប់កាមេរ៉ាសុវត្ថិភាព និងបណ្ដាញសហគ្រាស។',
      letter_p2: 'ខ្ញុំជាមនុស្សរៀនឆាប់ចេះ សម្របខ្លួនបានលឿនតាមគោលការណ៍ហេដ្ឋារចនាសម្ព័ន្ធថ្មីៗ និងប្ដេជ្ញាខ្ពស់ក្នុងការធានាស្ថិរភាព និងសុវត្ថិភាពបណ្ដាញ។',
      letter_p3: 'សូមអរគុណចំពោះពេលវេលា និងការពិចារណារបស់លោក/លោកស្រី។ ខ្ញុំរង់ចាំឱកាសពិភាក្សាលម្អិតបន្ថែមទៀតអំពីលក្ខណៈសម្បត្តិរបស់ខ្ញុំក្នុងពេលសម្ភាសន៍។',
      letter_sign: 'ដោយក្ដីគោរព,<br /><strong>Kun Amra</strong>',
      letter_dl_btn: 'ទាញយក CV + លិខិតពេញ (PDF)',
      modal_phone_kicker: 'ភ្ជាប់ទំនាក់ទំនងតាមទូរស័ព្ទ',
      phone_opt1_title: '1. ហៅទូរស័ព្ទ',
      phone_opt2_title: '2. បើក Telegram',
      phone_copy_btn: 'ចម្លងលេខ',
      phone_dial_prefix: 'តេទៅ ',
      toast_theme_dark: 'បានប្តូរទៅម៉ូដងងឹត (DARK)',
      toast_theme_light: 'បានប្តូរទៅម៉ូដភ្លឺ (LIGHT)',
      toast_copied: 'បានចម្លងទុក៖ ',
      toast_email_open: 'កំពុងបើកកម្មវិធីអ៊ីមែលដែលបានបំពេញជាស្រេច...',
      roles: ['មន្ត្រីជំនួយ IT', 'អ្នកបច្ចេកទេសបណ្ដាញ', 'អ្នកជំនាញ CCTV និងហេដ្ឋារចនាសម្ព័ន្ធ'],
      scenarios: {
        normal: {
          code: 'MODE // ស្ថានភាពធម្មតា',
          badge: 'ដំណើរការ 99.98%',
          title: 'បណ្ដាញសហគ្រាស និងប្រព័ន្ធកាមេរ៉ាមានលំនឹង',
          desc: 'ការបែងចែកដាច់ដោយឡែករវាងម៉ាស៊ីនការិយាល័យ (VLAN 10), កាមេរ៉ា CCTV IP/Analog ភ្ជាប់ទៅ NVR (VLAN 20) និង Wireless AP (VLAN 30) លើខ្សែ Cat6 ស្តង់ដារ។',
          logs: [
            ['ok', '[PASS]', 'DHCP Pool របស់ Router ដំណើរការល្អ (192.168.1.50 - .200)'],
            ['ok', '[PASS]', 'NVR កំពុងថតសកម្មគ្រប់ប៉ុស្តិ៍ IP/Analog'],
            ['ok', '[PASS]', 'ខ្សែ Cat5e/Cat6 បានតេស្តត្រឹមត្រូវ • គ្មានកំហុស CRC'],
          ],
        },
        vlan: {
          code: 'MODE // គោលការណ៍_VLAN_QOS',
          badge: 'បានបែងចែក',
          title: 'ការបែងចែក VLAN និងកម្រិតបញ្ជូន QoS',
          desc: 'បំបែក Broadcast Domain តាមរយៈ 802.1Q VLAN លើ Switch ស្រទាប់ទី 2/3។ កម្រិតល្បឿនកំណត់ការពារកុំឱ្យ Wi-Fi ប៉ះពាល់ដល់ NVR និងម៉ាស៊ីនការងារ។',
          logs: [
            ['info', '[VLAN 10]', 'ម៉ាស៊ីនការងារភ្ជាប់ទៅ Domain និងថាសរួម'],
            ['info', '[VLAN 20]', 'បម្រុងទុក Bandwidth ជាក់លាក់សម្រាប់ប្រព័ន្ធ CCTV NVR'],
            ['ok', '[QoS]', 'ចរាចរណ៍ Wi-Fi ត្រូវបានគ្រប់គ្រងតាមគោលការណ៍ត្រឹមត្រូវ'],
          ],
        },
        conflict: {
          code: 'MODE // ការជួសជុលបញ្ហា',
          badge: 'បានដោះស្រាយ',
          title: 'ការវិភាគបញ្ហាជាន់ IP និងការដាច់បណ្ដាញ',
          desc: 'រកឃើញ IP ជាន់គ្នានៅលើ VLAN 10 និងក្បាល RJ45 រលុង។ បានផ្ដាច់ Port កំណត់ DHCP ថ្មី គាបក្បាល Cat6 ឡើងវិញ និងស្ដារបណ្ដាញដំណើរការធម្មតា។',
          logs: [
            ['warn', '[ALERT]', 'រកឃើញការជាន់ ARP លើ 10.10.10.42 -> បានផ្ដាច់បណ្ដោះអាសន្ន'],
            ['info', '[TRACE]', 'បានតេស្តខ្សែ Cat6 និងគាបក្បាល RJ45 T568B ឡើងវិញ'],
            ['ok', '[FIXED]', 'ចង DHCP ជាមួយ MAC; Ping ម៉ាស៊ីនមានស្ថិរភាព'],
          ],
        },
        cctv: {
          code: 'MODE // ការបម្រុងទុក_CCTV',
          badge: 'កំពុងថត',
          title: 'ការតម្រឹមទីតាំង CCTV និងប្រព័ន្ធបម្រុងទុក NVR/DVR',
          desc: 'តម្រឹមមុំកាមេរ៉ាកុំឱ្យមានចំណុចខ្វាក់ទាំង Analog និង IP។ បញ្ជូនវីដេអូទៅប្រព័ន្ធផ្ទុក NVR/DVR ជាមួយការត្រួតពិនិត្យស្ថានភាពថតជាប់លាប់។',
          logs: [
            ['info', '[SITE]', 'ផ្ទៀងផ្ទាត់មុំកាមេរ៉ា IP & Analog ច្បាស់ល្អទាំងពេលយប់'],
            ['ok', '[NVR]', 'ថាសផ្ទុកដំណើរការល្អ • ការបម្រុងទុកវីដេអូជាប់លាប់'],
            ['ok', '[NET]', 'VLAN ដាច់ដោយឡែកសម្រាប់កាមេរ៉ាការពារការកកស្ទះកញ្ចប់ទិន្នន័យ'],
          ],
        },
      },
    },
    ch: {
      nav_about: '关于',
      nav_lab: '拓扑实验室',
      nav_skills: '技能',
      nav_experience: '经验',
      nav_education: '教育',
      nav_contact: '联系',
      hero_status: '可立即入职 • 柬埔寨金边',
      hero_eyebrow: '您好，我是',
      hero_lead: '信息技术学士毕业生（ITI），曾任 KTC Engineering 现场技术员。擅长部署高可用网络基础设施、VLAN 分段与安防监控系统，并保持企业工作站持续稳定运行。',
      cta_hire: '联系 / 聘用我',
      cta_lab: '探索实时网络实验室',
      cta_cover: '求职信',
      btn_download_cv: '下载简历',
      btn_cover_letter: '求职信',
      btn_cover_letter_read: '阅读求职信',
      btn_dl_cv_full: '下载完整简历 (PDF)',
      btn_view_cover: '查看求职信',
      btn_copy: '复制',
      btn_close: '关闭',
      btn_cancel: '取消',
      metric_degree: 'IT 学士学位 (ITI)',
      metric_domains: '核心 IT 与网络领域',
      metric_uptime: '稳定性与现场运维',
      hud_online: '在线',
      hud_k_degree: '学位',
      hud_v_degree: 'IT 学士',
      hud_k_specialty: '专长',
      hud_v_specialty: '路由与 CCTV',
      hud_k_base: '常驻地',
      hud_v_base: '金边棉芷区',
      s1_tag: '01 // 个人简介',
      s1_title: '连接现场工程与企业 IT 高可用运维',
      about_h3: '关于我',
      about_p1: '我是一名充满热情的信息技术毕业生，毕业于金边 <strong>工业技术学院（ITI）</strong>，拥有 <strong>高级技术文凭</strong> 和 <strong>信息技术学士学位</strong>。结合在 <strong>KTC Engineering</strong> 担任 <strong>CCTV 与网络技术员</strong> 的一线实战经验，我具备扎实的网络理论基础与现场实施能力。',
      about_p2: '从配置路由器、二/三层交换机、VLAN 分段和无线 AP，到自动化部署 Windows 操作系统、制作 Cat5e/Cat6 网线端接以及调试 NVR/DVR 监控存储备份，我能够快速适应基础架构标准并始终保障网络稳定与安全。',
      about_hl1: '工作站从零部署、磁盘分区与本地加域集成',
      about_hl2: '快速排查 IP 冲突、链路中断及物理布线故障',
      about_hl3: '持续学习并研究现代基础设施与网络安全工具',
      lang_panel_h3: '语言能力',
      lang_kh_name: '高棉语（柬埔寨语）',
      lang_kh_sub: '母语',
      lang_kh_badge: '母语',
      lang_en_name: '英语',
      lang_en_sub: '阅读、听力与口语',
      lang_en_badge: '日常会话 / 基础',
      base_panel_h3: '工作地点',
      base_address: '柬埔寨金边市棉芷区<br />Sangkat Mean Chey',
      role_tag_1: 'IT 支持工程师',
      role_tag_2: '网络技术员',
      role_tag_3: 'CCTV 技术员',
      s2_tag: '02 // 交互架构实验室',
      s2_title: '实时基础设施与故障排查模拟器',
      s2_sub: '切换下方运行场景，查看我如何设计、分段并排查企业网络与 CCTV 视频监控拓扑。',
      lab_tab_normal: '正常运行',
      lab_tab_vlan: 'VLAN 与带宽 QoS',
      lab_tab_conflict: 'IP 冲突与断连修复',
      lab_tab_cctv: 'CCTV NVR 备份流',
      stat_latency: '延迟',
      stat_loss: '丢包率',
      stat_speed: '链路速率',
      s3_tag: '03 // 技术能力库',
      s3_title: '技能矩阵与交互式 NOC 终端',
      filter_all: '全部技能',
      filter_network: '网络与安全',
      filter_systems: '系统与桌面',
      filter_cctv: 'CCTV 与布线',
      skill1_title: '网络管理',
      skill1_desc: '路由器、二/三层交换机、无线 AP、TCP/IP、DHCP 与 IP 子网划分。',
      skill2_title: '网络安全与 VLAN',
      skill2_desc: 'VLAN 分段隔离、流量控制与监控及办公带宽分配。',
      skill3_title: '硬件与系统部署',
      skill3_desc: 'Windows 系统自动化安装、磁盘分区、工作站映射与本地域集成。',
      skill4_title: 'CCTV 与 NVR/DVR 系统',
      skill4_desc: '点位规划、模拟与 IP 摄像头安装调校及安全 NVR/DVR 录像备份。',
      skill5_title: 'Cat5e/Cat6 布线与排障',
      skill5_desc: '综合布线、RJ45 水晶头压接、机柜跳线、测线与 IP 冲突排查。',
      skill6_title: '办公效率与文档报告',
      skill6_desc: '熟练使用 Microsoft Office 编写网络拓扑文档、资产清单及故障报告。',
      term_welcome_1: '欢迎使用 Kun Amra 交互式 IT 控制台 v2.6',
      term_welcome_2: '点击上方快捷指令或输入 <span class="t-accent">help</span> 并按回车。',
      term_ph: '输入指令 (如 help, skills, ping ktc-switch)...',
      s4_tag: '04 // 现场运维经历',
      s4_title: '专业与技术工作经验',
      exp1_badge: '企业与现场部署',
      exp1_title: 'CCTV 与网络技术员',
      exp1_org: 'KTC Engineering • 柬埔寨金边',
      exp1_op1_t: '网络基础设施',
      exp1_op1_d: '安装并配置路由器、交换机、无线接入点及工作站 IP 参数（TCP/IP、DHCP）。',
      exp1_op2_t: '安防监控部署',
      exp1_op2_d: '规划点位布局、安装并校准模拟与 IP 摄像头，配置 NVR/DVR 存储以保障录像备份。',
      exp1_op3_t: '系统与桌面配置',
      exp1_op3_d: '自动化部署 Windows 系统、管理磁盘分区并将客户端接入共享网络资源。',
      exp1_op4_t: '现场故障排查',
      exp1_op4_d: '诊断网络掉线、IP 冲突问题，铺设并测试 Cat5e/Cat6 以太网线缆。',
      exp2_date: '学院实验室项目',
      exp2_badge: '学院实训与团队协作',
      exp2_title: 'CCTV 与网络技术员（校内实验室项目）',
      exp2_org: '工业技术学院 (ITI) • 柬埔寨金边',
      exp2_op1_t: '硬件配置',
      exp2_op1_d: '为多节点网络实验拓扑配置路由器、交换机和客户端 IP 地址。',
      exp2_op2_t: '故障排查',
      exp2_op2_d: '在团队实操部署中定位并解决 IP 冲突及线缆故障。',
      exp2_op3_t: '团队协作',
      exp2_op3_d: '在严格的项目周期内与团队成员紧密配合完成技术实施任务。',
      s5_tag: '05 // 学历与认证',
      s5_title: '教育背景与官方证书',
      s5_sub: '经柬埔寨劳工与职业培训部（MLVT）批准的正规技术教育，附可在线查验的官方证书。',
      edu1_badge: '已认证学位',
      edu1_title: '信息技术学士 (Bachelor of Technology in IT)',
      edu1_school: '工业技术学院 (ITI)，柬埔寨金边',
      edu1_li1: '考试时间：2025年10月06日',
      edu1_li2: '临时毕业证书签发：2026年09月21日',
      edu1_btn: '查看官方证书',
      edu1_cert_title: '信息技术学士学位 — 临时毕业证书',
      edu1_cert_sub: '工业技术学院 (ITI) • 考试时间：2025年10月06日',
      edu2_badge: 'MLVT 官方批准',
      edu2_title: '信息技术高级技术文凭',
      edu2_school: '工业技术学院 (ITI)，柬埔寨金边',
      edu2_li1: '考试时间：2023年11月20日',
      edu2_li2: '经劳工与职业培训部批准（2024年04月29日签发）',
      edu2_btn: '查看官方文凭',
      edu2_cert_title: '信息技术高级技术文凭',
      edu2_cert_sub: '工业技术学院 (ITI) • 劳工与职业培训部 (MLVT)',
      edu3_badge: '高三 / Grade 12',
      edu3_title: '高中文凭',
      edu3_school: 'Hun Sen Cheung Chnok 高中',
      edu4_badge: '初三 / Grade 9',
      edu4_title: '初级中学',
      edu4_school: 'Chealea 中学',
      s6_tag: '06 // 联系与推荐人',
      s6_title: '联系我胜任 IT 支持与网络职位',
      contact_h3: '直接联系方式',
      contact_intro: '随时准备在金边参加面试与技术评估。可通过电话或电子邮件直接联系，或下载完整简历包。',
      ch_phone: '电话（拨号或 Telegram）',
      ch_email: '电子邮箱',
      ch_location: '地址',
      ch_location_val: '柬埔寨金边市棉芷区 Sangkat Mean Chey',
      ref_tag: '专业推荐人',
      ref_badge: '已核实',
      ref_role: 'IT 部门副总裁',
      ref_tel_prefix: '电话:',
      form_h3: '发送面试邀请 / 咨询邮件',
      form_sub: '在下方填写内容，一键生成预填充的电子邮件发送至 Kun Amra。',
      form_label_name: '您的姓名 / 公司名称',
      form_ph_name: '例如：HR 团队 — 企业 IT 部',
      form_label_subject: '职位 / 主题',
      form_ph_subject: '例如：面试邀请 — IT 支持工程师',
      form_label_msg: '留言内容',
      form_ph_msg: '请填写职位详情、面试时间或技术要求...',
      form_submit: '打开邮件客户端发送',
      footer_role: '• IT 支持工程师 & 网络技术员',
      footer_meta: '柬埔寨金边 • 基于已核实证书制作 <a href="Kun Amra.pdf" target="_blank" rel="noopener">Kun Amra.pdf</a>',
      back_top: '↑ 返回顶部',
      modal_cert_kicker: '已验证学术凭证',
      cert_default_title: '官方证书',
      cert_zoom_in: '放大',
      cert_zoom_out: '缩小',
      modal_cover_kicker: '正式求职申请文件',
      modal_cover_title: '求职信 — IT 支持工程师',
      modal_cover_sub: 'Kun Amra • 柬埔寨金边 • 069-524-314',
      letter_salutation: '尊敬的招聘经理：',
      letter_p1: '我写信正式申请贵公司的 <strong>IT 支持工程师（IT Support Officer）</strong> 职位。作为毕业于 <strong>工业技术学院（ITI）</strong> 的信息技术专业毕业生，我持有 <strong>高级技术文凭</strong> 与 <strong>技术学士学位</strong>，并拥有在 <strong>KTC Engineering</strong> 的一线实战经验，具备扎实的理论基础与现场实施能力。',
      letter_cap_h4: '核心 IT 支持能力：',
      letter_cap_1: '<strong>网络管理：</strong>安装并配置路由器、二/三层交换机、无线 AP、DHCP 及子网划分。',
      letter_cap_2: '<strong>系统部署：</strong>Windows 操作系统安装、磁盘分区、工作站映射与本地域集成。',
      letter_cap_3: '<strong>硬件与故障排除：</strong>解决 IP 冲突、网络中断及执行 Cat5e/Cat6 物理布线与端接。',
      letter_cap_4: '<strong>网络与安全运维：</strong>实施基础 VLAN 分段及安防监控与企业网络的带宽分配。',
      letter_p2: '我学习能力强，能快速适应新的基础架构规范，并全心致力于保障高网络可用性与安全性。',
      letter_p3: '感谢您的宝贵时间与审阅。期待在面试中进一步交流我的专业背景与能力。',
      letter_sign: '此致<br />敬礼！<br /><strong>Kun Amra</strong>',
      letter_dl_btn: '下载完整简历与求职信 (PDF)',
      modal_phone_kicker: '通过电话联系',
      phone_opt1_title: '1. 拨打电话',
      phone_opt2_title: '2. 打开 Telegram',
      phone_copy_btn: '复制号码',
      phone_dial_prefix: '拨打 ',
      toast_theme_dark: '已切换至深色模式',
      toast_theme_light: '已切换至浅色模式',
      toast_copied: '已复制到剪贴板：',
      toast_email_open: '正在打开预填邮件客户端...',
      roles: ['IT 支持工程师', '网络技术员', 'CCTV 与基础设施专家'],
      scenarios: {
        normal: {
          code: 'MODE // 稳定运行',
          badge: '可用率 99.98%',
          title: '均衡的企业与安防监控网络架构',
          desc: '通过认证 Cat6 布线清晰隔离办公工作站（VLAN 10）、接入 NVR 存储的 IP/模拟 CCTV 摄像头（VLAN 20）和无线 AP（VLAN 30）。',
          logs: [
            ['ok', '[PASS]', '路由器 DHCP 地址池健康 (192.168.1.50 - .200)'],
            ['ok', '[PASS]', '所有 IP/模拟通道 NVR 录像正常运行'],
            ['ok', '[PASS]', 'Cat5e/Cat6 端接测试通过 • 0 CRC 错误'],
          ],
        },
        vlan: {
          code: 'MODE // VLAN_QOS策略',
          badge: '已分段隔离',
          title: 'VLAN 分段与带宽 QoS 分配',
          desc: '在二/三层交换机通过 802.1Q VLAN 隔离广播域。带宽限制确保无线流量不会挤占核心 NVR 监控流与域内工作站资源。',
          logs: [
            ['info', '[VLAN 10]', '工作站已映射至本地域及共享磁盘'],
            ['info', '[VLAN 20]', '为 CCTV NVR 上行链路预留保障带宽'],
            ['ok', '[QoS]', 'AP 访客/员工流量已按策略平滑限速'],
          ],
        },
        conflict: {
          code: 'MODE // 故障修复',
          badge: '已解决',
          title: 'IP 冲突与链路中断诊断修复',
          desc: '检测到 VLAN 10 工作站存在重复静态 IP 且 RJ45 跳线接触不良。隔离端口、重新分配 DHCP 保留并重压 Cat6 水晶头后恢复零丢包连接。',
          logs: [
            ['warn', '[ALERT]', '检测到 10.10.10.42 存在重复 ARP 冲突 -> 已隔离'],
            ['info', '[TRACE]', '已测试 Cat6 链路并重压 T568B RJ45 水晶头'],
            ['ok', '[FIXED]', 'DHCP 租约已绑定 MAC；工作站 Ping 恢复稳定'],
          ],
        },
        cctv: {
          code: 'MODE // 监控录像备份',
          badge: '正在录制',
          title: 'CCTV 现场校准与 NVR/DVR 冗余备份',
          desc: '校准模拟与 IP 摄像头视角消除监控盲区，将双码流接入 NVR/DVR 存储阵列并确保持续录像与备份健康度。',
          logs: [
            ['info', '[SITE]', 'IP 与模拟摄像头视野及夜视清晰度已核验'],
            ['ok', '[NVR]', '存储阵列状态健康 • 持续视频备份正常'],
            ['ok', '[NET]', '专用监控 VLAN 有效防止数据包拥塞'],
          ],
        },
      },
    },
    vn: {
      nav_about: 'Giới thiệu',
      nav_lab: 'Lab Mạng',
      nav_skills: 'Kỹ năng',
      nav_experience: 'Kinh nghiệm',
      nav_education: 'Học vấn',
      nav_contact: 'Liên hệ',
      hero_status: 'SẴN SÀNG NHẬN VIỆC • PHNOM PENH, CAMPUCHIA',
      hero_eyebrow: 'Xin chào, tôi là',
      hero_lead: 'Tốt nghiệp Cử nhân Công nghệ Thông tin (ITI) và kỹ thuật viên thực chiến tại KTC Engineering. Tôi triển khai hạ tầng mạng ổn định, bảo mật VLAN & hệ thống giám sát CCTV, đồng thời duy trì máy trạm doanh nghiệp đạt hiệu suất tối đa.',
      cta_hire: 'Liên hệ / Tuyển dụng',
      cta_lab: 'Khám phá Lab Mạng',
      cta_cover: 'Thư xin việc',
      btn_download_cv: 'Tải CV',
      btn_cover_letter: 'Thư xin việc',
      btn_cover_letter_read: 'Đọc Thư xin việc',
      btn_dl_cv_full: 'Tải CV đầy đủ (PDF)',
      btn_view_cover: 'Xem Thư xin việc',
      btn_copy: 'Sao chép',
      btn_close: 'Đóng',
      btn_cancel: 'Hủy',
      metric_degree: 'Cử nhân IT (ITI)',
      metric_domains: 'Lĩnh vực IT & Mạng',
      metric_uptime: 'Uptime & Thực địa',
      hud_online: 'TRỰC TUYẾN',
      hud_k_degree: 'BẰNG CẤP',
      hud_v_degree: 'Cử nhân IT',
      hud_k_specialty: 'CHUYÊN MÔN',
      hud_v_specialty: 'Mạng & CCTV',
      hud_k_base: 'ĐỊA ĐIỂM',
      hud_v_base: 'Mean Chey, PP',
      s1_tag: '01 // HỒ SƠ CÁ NHÂN',
      s1_title: 'Kết nối Kỹ thuật Thực địa & Vận hành IT Doanh nghiệp',
      about_h3: 'Về tôi',
      about_p1: 'Tôi là cử nhân Công nghệ Thông tin đầy nhiệt huyết, sở hữu <strong>Bằng Cao đẳng Kỹ thuật</strong> và <strong>Cử nhân Công nghệ Thông tin</strong> từ <strong>Viện Kỹ thuật Công nghiệp (ITI)</strong> tại Phnom Penh. Kết hợp với kinh nghiệm thực tế là <strong>Kỹ thuật viên CCTV &amp; Mạng tại KTC Engineering</strong>, tôi có sự cân bằng vững chắc giữa nền tảng lý thuyết mạng và năng lực triển khai thực chiến.',
      about_p2: 'Từ cấu hình router, switch Layer 2/3, phân đoạn VLAN và bộ phát Wi-Fi AP đến tự động hóa cài đặt Windows OS, bấm cáp Cat5e/Cat6 và căn chỉnh sao lưu đầu ghi NVR/DVR, tôi thích nghi nhanh với tiêu chuẩn hạ tầng và luôn cam kết đảm bảo tính ổn định, bảo mật mạng.',
      about_hl1: 'Cài đặt máy trạm hoàn chỉnh, phân vùng ổ đĩa & tích hợp Domain',
      about_hl2: 'Chẩn đoán nhanh xung đột IP, rớt mạng & lỗi cáp vật lý',
      about_hl3: 'Không ngừng học hỏi và nghiên cứu công cụ hạ tầng & bảo mật mới',
      lang_panel_h3: 'Ngôn ngữ',
      lang_kh_name: 'Tiếng Khmer',
      lang_kh_sub: 'Ngôn ngữ mẹ đẻ',
      lang_kh_badge: 'Bản ngữ',
      lang_en_name: 'Tiếng Anh',
      lang_en_sub: 'Đọc, Nghe & Giao tiếp',
      lang_en_badge: 'Giao tiếp / Cơ bản',
      base_panel_h3: 'Khu vực làm việc',
      base_address: 'Sangkat Mean Chey, Khan Mean Chey,<br />Phnom Penh, Campuchia',
      role_tag_1: 'Nhân viên Hỗ trợ IT',
      role_tag_2: 'Kỹ thuật viên Mạng',
      role_tag_3: 'Kỹ thuật viên CCTV',
      s2_tag: '02 // PHÒNG LAB KIẾN TRÚC TƯƠNG TÁC',
      s2_title: 'Mô phỏng Hạ tầng & Xử lý Sự cố Trực tiếp',
      s2_sub: 'Chuyển đổi các kịch bản vận hành dưới đây để xem cách tôi thiết kế, phân đoạn và xử lý sự cố mạng doanh nghiệp cũng như hệ thống giám sát CCTV.',
      lab_tab_normal: 'Vận hành Bình thường',
      lab_tab_vlan: 'VLAN & Băng thông QoS',
      lab_tab_conflict: 'Sửa Xung đột IP & Rớt mạng',
      lab_tab_cctv: 'Luồng Sao lưu CCTV NVR',
      stat_latency: 'ĐỘ TRỄ',
      stat_loss: 'MẤT GÓI TIN',
      stat_speed: 'TỐC ĐỘ KẾT NỐI',
      s3_tag: '03 // NĂNG LỰC KỸ THUẬT',
      s3_title: 'Kỹ năng & NOC Terminal Tương tác',
      filter_all: 'Tất cả Kỹ năng',
      filter_network: 'Mạng & Bảo mật',
      filter_systems: 'Hệ thống & OS',
      filter_cctv: 'CCTV & Cáp mạng',
      skill1_title: 'Quản trị Mạng',
      skill1_desc: 'Router, switch Layer 2/3, wireless AP, TCP/IP, DHCP & chia subnet IP.',
      skill2_title: 'Bảo mật Mạng & VLAN',
      skill2_desc: 'Phân đoạn VLAN, cô lập lưu lượng & phân bổ băng thông cho camera và văn phòng.',
      skill3_title: 'Phần cứng & Triển khai OS',
      skill3_desc: 'Cài đặt Windows OS tự động, phân vùng ổ đĩa, ánh xạ máy trạm & gia nhập Domain nội bộ.',
      skill4_title: 'Hệ thống CCTV & NVR/DVR',
      skill4_desc: 'Lập sơ đồ lắp đặt, gắn và căn chỉnh camera analog & IP, cấu hình sao lưu video NVR/DVR.',
      skill5_title: 'Cáp Cat5e/Cat6 & Chẩn đoán',
      skill5_desc: 'Đi dây cấu trúc, bấm đầu RJ45, đấu nối tủ rack, kiểm tra cáp và xử lý xung đột IP.',
      skill6_title: 'Tin học Văn phòng & Báo cáo',
      skill6_desc: 'Sử dụng Microsoft Office lập tài liệu sơ đồ mạng, kiểm kê thiết bị & báo cáo sự cố.',
      term_welcome_1: 'Chào mừng đến với Bảng điều khiển IT Kun Amra v2.6',
      term_welcome_2: 'Nhấp vào nút lệnh phía trên hoặc nhập <span class="t-accent">help</span> và nhấn Enter.',
      term_ph: 'nhập lệnh (vd: help, skills, ping ktc-switch)...',
      s4_tag: '04 // KINH NGHIỆM THỰC ĐỊA',
      s4_title: 'Kinh nghiệm Chuyên môn & Kỹ thuật',
      exp1_badge: 'Triển khai Doanh nghiệp & Thực địa',
      exp1_title: 'Kỹ thuật viên CCTV & Mạng',
      exp1_org: 'KTC Engineering • Phnom Penh, Campuchia',
      exp1_op1_t: 'Hạ tầng Mạng',
      exp1_op1_d: 'Lắp đặt và cấu hình router, switch, access point và thông số IP máy trạm (TCP/IP, DHCP).',
      exp1_op2_t: 'Triển khai Giám sát',
      exp1_op2_d: 'Lập bố cục hiện trường, gắn & căn chỉnh camera analog/IP và cấu hình lưu trữ NVR/DVR sao lưu an toàn.',
      exp1_op3_t: 'Thiết lập Hệ thống & OS',
      exp1_op3_d: 'Cài đặt Windows OS tự động, quản lý phân vùng và kết nối máy trạm vào tài nguyên mạng dùng chung.',
      exp1_op4_t: 'Xử lý Sự cố Hiện trường',
      exp1_op4_d: 'Chẩn đoán mất kết nối mạng, xung đột IP, đồng thời thi công và kiểm tra cáp Ethernet Cat5e/Cat6.',
      exp2_date: 'DỰ ÁN PHÒNG LAB HỌC THUẬT',
      exp2_badge: 'Phòng Lab & Làm việc Nhóm',
      exp2_title: 'Kỹ thuật viên CCTV & Mạng (Dự án Lab / Trường học)',
      exp2_org: 'Viện Kỹ thuật Công nghiệp (ITI) • Phnom Penh, Campuchia',
      exp2_op1_t: 'Cấu hình Phần cứng',
      exp2_op1_d: 'Cấu hình router, switch và địa chỉ IP máy khách cho mô hình mạng nhiều nút trong phòng lab.',
      exp2_op2_t: 'Xử lý Sự cố',
      exp2_op2_d: 'Phát hiện và khắc phục xung đột IP cùng lỗi cáp mạng trong quá trình triển khai nhóm thực tế.',
      exp2_op3_t: 'Phối hợp Nhóm',
      exp2_op3_d: 'Phối hợp chặt chẽ với thành viên nhóm trong các nhiệm vụ kỹ thuật và đảm bảo tiến độ dự án.',
      s5_tag: '05 // BẰNG CẤP HỌC THUẬT',
      s5_title: 'Học vấn & Chứng chỉ Chính thức',
      s5_sub: 'Chương trình đào tạo kỹ thuật chính quy được Bộ Lao động và Dạy nghề (MLVT) phê duyệt, kèm chứng chỉ gốc có thể xem trực tiếp.',
      edu1_badge: 'Bằng cấp Xác thực',
      edu1_title: 'Cử nhân Công nghệ ngành Công nghệ Thông tin',
      edu1_school: 'Viện Kỹ thuật Công nghiệp (ITI), Phnom Penh, Campuchia',
      edu1_li1: 'Kỳ thi: 06 tháng 10, 2025',
      edu1_li2: 'Ngày cấp giấy chứng nhận tốt nghiệp tạm thời: 21 tháng 09, 2026',
      edu1_btn: 'Xem Chứng chỉ Chính thức',
      edu1_cert_title: 'Cử nhân Công nghệ Thông tin — Giấy chứng nhận Tạm thời',
      edu1_cert_sub: 'Viện Kỹ thuật Công nghiệp (ITI) • Kỳ thi: 06/10/2025',
      edu2_badge: 'MLVT Phê duyệt',
      edu2_title: 'Bằng Cao đẳng Kỹ thuật Công nghệ Thông tin',
      edu2_school: 'Viện Kỹ thuật Công nghiệp (ITI), Phnom Penh, Campuchia',
      edu2_li1: 'Kỳ thi: 20 tháng 11, 2023',
      edu2_li2: 'Phê duyệt bởi Bộ Lao động và Dạy nghề (Cấp ngày 29/04/2024)',
      edu2_btn: 'Xem Văn bằng Chính thức',
      edu2_cert_title: 'Bằng Cao đẳng Kỹ thuật Công nghệ Thông tin',
      edu2_cert_sub: 'Viện Kỹ thuật Công nghiệp (ITI) • Bộ Lao động và Dạy nghề (MLVT)',
      edu3_badge: 'Lớp 12',
      edu3_title: 'Bằng Tốt nghiệp Trung học Phổ thông',
      edu3_school: 'Trường THPT Hun Sen Cheung Chnok',
      edu4_badge: 'Lớp 9',
      edu4_title: 'Trung học Cơ sở',
      edu4_school: 'Trường THCS Chealea',
      s6_tag: '06 // LIÊN HỆ & NGƯỜI THAM CHIẾU',
      s6_title: 'Kết nối cho Vị trí Hỗ trợ IT & Kỹ thuật Mạng',
      contact_h3: 'Kênh Liên lạc Trực tiếp',
      contact_intro: 'Sẵn sàng phỏng vấn và đánh giá kỹ thuật ngay tại Phnom Penh. Liên hệ trực tiếp qua điện thoại, email hoặc tải trọn bộ hồ sơ CV.',
      ch_phone: 'Điện thoại (Gọi hoặc Telegram)',
      ch_email: 'Email',
      ch_location: 'Địa chỉ',
      ch_location_val: 'Sangkat Mean Chey, Khan Mean Chey, Phnom Penh',
      ref_tag: 'NGƯỜI THAM CHIẾU CHUYÊN MÔN',
      ref_badge: 'Đã xác minh',
      ref_role: 'Phó Chủ tịch Phòng IT',
      ref_tel_prefix: 'ĐT:',
      form_h3: 'Gửi Thư mời Phỏng vấn / Liên hệ',
      form_sub: 'Soạn tin nhắn bên dưới để mở ngay bản nháp email điền sẵn gửi tới Kun Amra.',
      form_label_name: 'Tên / Tổ chức của bạn',
      form_ph_name: 'Vd: Bộ phận Nhân sự — Doanh nghiệp IT',
      form_label_subject: 'Vị trí / Chủ đề',
      form_ph_subject: 'Vd: Thư mời phỏng vấn — Nhân viên Hỗ trợ IT',
      form_label_msg: 'Nội dung',
      form_ph_msg: 'Chia sẻ chi tiết vị trí, lịch phỏng vấn hoặc yêu cầu kỹ thuật...',
      form_submit: 'Mở Email để Gửi',
      footer_role: '• Nhân viên Hỗ trợ IT & Kỹ thuật viên Mạng',
      footer_meta: 'Phnom Penh, Campuchia • Xây dựng từ hồ sơ xác thực trong <a href="Kun Amra.pdf" target="_blank" rel="noopener">Kun Amra.pdf</a>',
      back_top: '↑ ĐẦU TRANG',
      modal_cert_kicker: 'CHỨNG CHỈ HỌC THUẬT ĐÃ XÁC MINH',
      cert_default_title: 'Chứng chỉ Chính thức',
      cert_zoom_in: 'Phóng to',
      cert_zoom_out: 'Thu nhỏ',
      modal_cover_kicker: 'TÀI LIỆU ỨNG TUYỂN CHÍNH THỨC',
      modal_cover_title: 'Thư xin việc — Nhân viên Hỗ trợ IT',
      modal_cover_sub: 'Kun Amra • Phnom Penh, Campuchia • 069-524-314',
      letter_salutation: 'Kính gửi Quản lý Tuyển dụng,',
      letter_p1: 'Tôi viết thư này để chính thức bày tỏ nguyện vọng ứng tuyển vị trí <strong>Nhân viên Hỗ trợ IT (IT Support Officer)</strong>. Là sinh viên tốt nghiệp ngành Công nghệ Thông tin với <strong>Bằng Cao đẳng Kỹ thuật</strong> và <strong>Bằng Cử nhân Công nghệ</strong> từ <strong>Viện Kỹ thuật Công nghiệp (ITI)</strong>, cùng kinh nghiệm thực tiễn tại <strong>KTC Engineering</strong>, tôi sở hữu nền tảng kiến thức vững chắc và năng lực triển khai thực tế.',
      letter_cap_h4: 'Năng lực Hỗ trợ IT Cốt lõi:',
      letter_cap_1: '<strong>Quản trị Mạng:</strong> Lắp đặt và cấu hình router, switch Layer 2/3, wireless AP, DHCP và chia subnet.',
      letter_cap_2: '<strong>Triển khai Hệ thống:</strong> Cài đặt Windows OS, phân vùng ổ đĩa, ánh xạ máy trạm và tích hợp Domain nội bộ.',
      letter_cap_3: '<strong>Phần cứng &amp; Xử lý sự cố:</strong> Khắc phục xung đột IP, rớt mạng và thi công, bấm đầu cáp vật lý Cat5e/Cat6.',
      letter_cap_4: '<strong>Vận hành Mạng &amp; Bảo mật:</strong> Triển khai phân đoạn VLAN cơ bản và phân bổ băng thông cho hệ thống giám sát và mạng doanh nghiệp.',
      letter_p2: 'Tôi có khả năng tiếp thu nhanh, dễ dàng thích nghi với quy chuẩn hạ tầng mới và luôn tận tâm đảm bảo độ ổn định, bảo mật cao cho hệ thống mạng.',
      letter_p3: 'Xin cảm ơn Quý anh/chị đã dành thời gian xem xét hồ sơ. Tôi rất mong có cơ hội được trao đổi thêm về năng lực của bản thân trong buổi phỏng vấn.',
      letter_sign: 'Trân trọng,<br /><strong>Kun Amra</strong>',
      letter_dl_btn: 'Tải trọn bộ CV + Thư xin việc (PDF)',
      modal_phone_kicker: 'KẾT NỐI QUA ĐIỆN THOẠI',
      phone_opt1_title: '1. Gọi điện thoại',
      phone_opt2_title: '2. Mở Telegram',
      phone_copy_btn: 'Sao chép số',
      phone_dial_prefix: 'Gọi ',
      toast_theme_dark: 'Đã chuyển sang giao diện TỐI',
      toast_theme_light: 'Đã chuyển sang giao diện SÁNG',
      toast_copied: 'Đã sao chép: ',
      toast_email_open: 'Đang mở ứng dụng email đã điền sẵn nội dung...',
      roles: ['Nhân viên Hỗ trợ IT', 'Kỹ thuật viên Mạng', 'Chuyên gia CCTV & Hạ tầng'],
      scenarios: {
        normal: {
          code: 'MODE // TRẠNG_THÁI_ỔN_ĐỊNH',
          badge: 'UPTIME 99.98%',
          title: 'Hệ thống Mạng Doanh nghiệp & Giám sát Cân bằng',
          desc: 'Tách biệt rõ ràng giữa máy trạm văn phòng (VLAN 10), camera CCTV IP/Analog truyền về lưu trữ NVR (VLAN 20) và bộ phát Wi-Fi (VLAN 30) trên hạ tầng cáp Cat6 đạt chuẩn.',
          logs: [
            ['ok', '[PASS]', 'DHCP pool trên Router hoạt động ổn định (192.168.1.50 - .200)'],
            ['ok', '[PASS]', 'Đầu ghi NVR đang ghi hình đầy đủ các kênh IP/Analog'],
            ['ok', '[PASS]', 'Đầu bấm cáp Cat5e/Cat6 đạt chuẩn • 0 lỗi CRC'],
          ],
        },
        vlan: {
          code: 'MODE // CHÍNH_SÁCH_VLAN_QOS',
          badge: 'ĐÃ PHÂN ĐOẠN',
          title: 'Phân đoạn VLAN & Phân bổ Băng thông QoS',
          desc: 'Cô lập miền broadcast qua gắn thẻ 802.1Q VLAN trên switch Layer 2/3. Giới hạn băng thông giữ cho lưu lượng Wi-Fi không làm nghẽn luồng giám sát NVR và máy trạm.',
          logs: [
            ['info', '[VLAN 10]', 'Máy trạm đã ánh xạ vào Domain nội bộ & ổ đĩa chung'],
            ['info', '[VLAN 20]', 'Dành riêng băng thông đảm bảo cho đường truyền CCTV NVR'],
            ['ok', '[QoS]', 'Lưu lượng Wi-Fi khách/nhân viên được giới hạn đúng chính sách'],
          ],
        },
        conflict: {
          code: 'MODE // KHẮC_PHỤC_SỰ_CỐ',
          badge: 'ĐÃ XỬ LÝ',
          title: 'Chẩn đoán Xung đột IP & Mất Kết nối Mạng',
          desc: 'Phát hiện trùng IP tĩnh trên máy trạm VLAN 10 và đầu bấm RJ45 lỏng. Cô lập cổng, cấp phát lại DHCP theo MAC, bấm lại đầu Cat6 và khôi phục kết nối không mất gói.',
          logs: [
            ['warn', '[ALERT]', 'Phát hiện xung đột ARP trùng lặp tại 10.10.10.42 -> đã cô lập'],
            ['info', '[TRACE]', 'Kiểm tra tuyến cáp Cat6; bấm lại đầu RJ45 chuẩn T568B'],
            ['ok', '[FIXED]', 'Đã gán DHCP cố định theo MAC; ping máy trạm ổn định'],
          ],
        },
        cctv: {
          code: 'MODE // SAO_LƯU_GIÁM_SÁT',
          badge: 'ĐANG GHI HÌNH',
          title: 'Căn chỉnh Góc Camera CCTV & Dự phòng NVR/DVR',
          desc: 'Căn chỉnh góc quan sát không điểm mù cho cả camera analog và IP. Định tuyến luồng kép vào cụm lưu trữ NVR/DVR đảm bảo thời gian lưu trữ và sao lưu liên tục.',
          logs: [
            ['info', '[SITE]', 'Góc nhìn & độ nét ban đêm của camera IP & Analog đạt chuẩn'],
            ['ok', '[NVR]', 'Ổ đĩa lưu trữ tốt • xác nhận sao lưu video liên tục'],
            ['ok', '[NET]', 'VLAN giám sát riêng giúp ngăn ngừa nghẽn gói tin'],
          ],
        },
      },
    },
  };

  let currentLang = localStorage.getItem('kun-amra-lang') || 'en';
  let currentScenarioKey = 'normal';
  let onRolesUpdated = null;
  let onScenarioRefresh = null;

  function getT() {
    return translations[currentLang] || translations.en;
  }

  function applyLang(lang) {
    if (!translations[lang]) lang = 'en';
    const t = translations[lang];
    const htmlLangMap = { en: 'en', kh: 'km', ch: 'zh', vn: 'vi' };
    document.documentElement.lang = htmlLangMap[lang] || 'en';
    document.documentElement.setAttribute('data-lang', lang);

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) el.textContent = t[key];
    });
    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const key = el.getAttribute('data-i18n-html');
      if (t[key] !== undefined) el.innerHTML = t[key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (t[key] !== undefined) el.placeholder = t[key];
    });
    document.querySelectorAll('[data-i18n-cert-title]').forEach((el) => {
      const key = el.getAttribute('data-i18n-cert-title');
      if (t[key] !== undefined) el.setAttribute('data-cert-title', t[key]);
    });
    document.querySelectorAll('[data-i18n-cert-sub]').forEach((el) => {
      const key = el.getAttribute('data-i18n-cert-sub');
      if (t[key] !== undefined) el.setAttribute('data-cert-sub', t[key]);
    });

    // Update role scramble data & active hero display
    const roleEl = document.getElementById('roleScramble');
    if (roleEl && t.roles) {
      roleEl.setAttribute('data-roles', JSON.stringify(t.roles));
      if (typeof onRolesUpdated === 'function') onRolesUpdated(t.roles);
    }

    // Update lang button label
    const labels = { en: 'EN', kh: 'KH', ch: 'CH', vn: 'VN' };
    const langBtnLabel = document.getElementById('langBtnLabel');
    if (langBtnLabel) langBtnLabel.textContent = labels[lang] || 'EN';

    // Update active option highlight
    document.querySelectorAll('.lang-opt').forEach((opt) => {
      opt.classList.toggle('active', opt.getAttribute('data-lang') === lang);
    });

    currentLang = lang;
    localStorage.setItem('kun-amra-lang', lang);

    // Refresh live topology telemetry & phone call prefix if modal is open
    if (typeof onScenarioRefresh === 'function') onScenarioRefresh();
    const activePhone = document.getElementById('phoneCallLink');
    const activePhoneSub = document.getElementById('phoneCallSub');
    if (activePhone && activePhoneSub) {
      const e164 = activePhone.getAttribute('href')?.replace('tel:', '') || '+85569524314';
      activePhoneSub.textContent = `${t.phone_dial_prefix}${e164}`;
    }
  }

  // Language switcher toggle
  const langBtn = document.getElementById('langBtn');
  const langDropdown = document.getElementById('langDropdown');

  if (langBtn && langDropdown) {
    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = !langDropdown.hidden;
      langDropdown.hidden = isOpen;
      langBtn.setAttribute('aria-expanded', String(!isOpen));
    });

    langDropdown.querySelectorAll('.lang-opt').forEach((opt) => {
      opt.addEventListener('click', () => {
        applyLang(opt.getAttribute('data-lang') || 'en');
        langDropdown.hidden = true;
        langBtn.setAttribute('aria-expanded', 'false');
      });
    });

    document.addEventListener('click', () => {
      if (!langDropdown.hidden) {
        langDropdown.hidden = true;
        langBtn.setAttribute('aria-expanded', 'false');
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !langDropdown.hidden) {
        langDropdown.hidden = true;
        langBtn.setAttribute('aria-expanded', 'false');
        langBtn.focus();
      }
    });
  }

  // Apply saved or default language on load
  applyLang(currentLang);

  /* ------------------------------------------------------------------------
     1. Preloader Handshake (triggers visible hero animations on dismiss)
     ------------------------------------------------------------------------ */
  const preloader = document.getElementById('preloader');
  let startReveals = () => {};
  let preloaderDismissed = false;

  function dismissPreloader() {
    if (preloaderDismissed) return;
    preloaderDismissed = true;
    if (preloader) preloader.classList.add('is-done');
    setTimeout(() => startReveals(), prefersReducedMotion ? 0 : 120);
  }

  if (preloader) {
    if (prefersReducedMotion) {
      dismissPreloader();
    } else {
      window.addEventListener('load', () => setTimeout(dismissPreloader, 520));
      if (document.readyState === 'complete') {
        setTimeout(dismissPreloader, 520);
      }
      setTimeout(dismissPreloader, 1250);
    }
  }

  /* ------------------------------------------------------------------------
     2. Theme Switcher (Dark NOC / Clean Light)
     ------------------------------------------------------------------------ */
  const rootEl = document.documentElement;
  const themeToggle = document.getElementById('themeToggle');
  const savedTheme = localStorage.getItem('kun-amra-theme');
  if (savedTheme === 'light' || savedTheme === 'dark') {
    rootEl.setAttribute('data-theme', savedTheme);
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const next = rootEl.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      rootEl.setAttribute('data-theme', next);
      localStorage.setItem('kun-amra-theme', next);
      const t = getT();
      showToast(next === 'dark' ? t.toast_theme_dark : t.toast_theme_light);
    });
  }

  /* ------------------------------------------------------------------------
     3. Toast Notification & One-Click Clipboard Copy
     ------------------------------------------------------------------------ */
  const toastEl = document.getElementById('toast');
  let toastTimer;

  function showToast(message) {
    if (!toastEl) return;
    toastEl.textContent = message;
    toastEl.classList.add('is-shown');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove('is-shown'), 2600);
  }

  document.querySelectorAll('[data-copy]').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const value = btn.getAttribute('data-copy');
      if (!value) return;
      try {
        await navigator.clipboard.writeText(value);
        showToast(`${getT().toast_copied}${value}`);
      } catch {
        const temp = document.createElement('textarea');
        temp.value = value;
        document.body.appendChild(temp);
        temp.select();
        document.execCommand('copy');
        temp.remove();
        showToast(`${getT().toast_copied}${value}`);
      }
    });
  });

  /* ------------------------------------------------------------------------
     4. Sticky Header, Scroll Progress Bar, Mobile Drawer & Active Nav Spy
     ------------------------------------------------------------------------ */
  const siteHeader = document.getElementById('siteHeader');
  const scrollProgress = document.getElementById('scrollProgress');
  const menuToggle = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('mobileNav');
  const navLinks = Array.from(document.querySelectorAll('.main-nav .nav-link'));
  const observedSections = navLinks
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  let checkVisibleFallback = null;

  function onScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0;

    if (scrollProgress) scrollProgress.style.width = `${pct.toFixed(2)}%`;
    if (siteHeader) siteHeader.classList.toggle('is-scrolled', scrollTop > 28);

    // Highlight current section link
    let currentId = '';
    for (const sec of observedSections) {
      const top = sec.offsetTop - 140;
      if (scrollTop >= top) currentId = sec.id;
    }
    navLinks.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === `#${currentId}`);
    });

    if (typeof checkVisibleFallback === 'function') checkVisibleFallback();
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (menuToggle && mobileNav) {
    const closeMenu = () => {
      menuToggle.classList.remove('is-open');
      mobileNav.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    };
    menuToggle.addEventListener('click', () => {
      const open = !mobileNav.classList.contains('is-open');
      menuToggle.classList.toggle('is-open', open);
      mobileNav.classList.toggle('is-open', open);
      menuToggle.setAttribute('aria-expanded', String(open));
    });
    mobileNav.querySelectorAll('a, button').forEach((item) => item.addEventListener('click', closeMenu));
  }

  /* ------------------------------------------------------------------------
     5. Hero Cipher Scramble Role Rotator
     ------------------------------------------------------------------------ */
  const roleEl = document.getElementById('roleScramble');
  if (roleEl) {
    let roles = ['IT Support Officer', 'Network Technician', 'CCTV & Infrastructure Specialist'];
    try {
      roles = JSON.parse(roleEl.getAttribute('data-roles') || '[]') || roles;
    } catch {
      /* fallback defaults */
    }

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/_#';
    let roleIdx = 0;

    let scrambleTimer = null;

    function scrambleTo(target) {
      if (scrambleTimer) clearInterval(scrambleTimer);
      if (prefersReducedMotion) {
        roleEl.textContent = target;
        return;
      }
      let frame = 0;
      const totalFrames = 22;
      scrambleTimer = setInterval(() => {
        const progress = frame / totalFrames;
        const settled = Math.floor(progress * target.length);
        let out = '';
        for (let i = 0; i < target.length; i++) {
          if (target[i] === ' ') {
            out += ' ';
          } else if (i < settled) {
            out += target[i];
          } else {
            out += chars[Math.floor(Math.random() * chars.length)];
          }
        }
        roleEl.textContent = out;
        frame++;
        if (frame > totalFrames) {
          clearInterval(scrambleTimer);
          scrambleTimer = null;
          roleEl.textContent = target;
        }
      }, 34);
    }

    onRolesUpdated = (newRoles) => {
      if (scrambleTimer) {
        clearInterval(scrambleTimer);
        scrambleTimer = null;
      }
      if (Array.isArray(newRoles) && newRoles.length > 0) {
        roles = newRoles;
        roleIdx = roleIdx % roles.length;
        roleEl.textContent = roles[roleIdx];
      }
    };

    // Sync initial rendered role text cleanly to current language
    if (roles.length > 0) roleEl.textContent = roles[0];

    setInterval(() => {
      roleIdx = (roleIdx + 1) % roles.length;
      scrambleTo(roles[roleIdx]);
    }, 3800);
  }

  /* ------------------------------------------------------------------------
     6. Staggered Scroll Reveals, Timeline Rail & KPI Count-Up
     ------------------------------------------------------------------------ */
  const revealTargets = Array.from(
    new Set([
      ...document.querySelectorAll('.reveal'),
      ...document.querySelectorAll('.skill-card'),
      ...document.querySelectorAll('#experienceTimeline'),
    ])
  );
  let revealsStarted = false;

  function animateCounter(el) {
    if (el.dataset.counted) return;
    el.dataset.counted = 'true';
    const target = Number(el.getAttribute('data-target') || 0);
    if (prefersReducedMotion || target <= 0) {
      el.textContent = String(target);
      return;
    }
    const startVal = target > 1000 ? target - 35 : 0;
    const duration = 950;
    const startTime = performance.now();

    function step(now) {
      const t = Math.min(1, (now - startTime) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      el.textContent = String(Math.round(startVal + (target - startVal) * eased));
      if (t < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  function revealElement(el) {
    if (!el || el.dataset.revealed) return;
    el.dataset.revealed = 'true';
    const rawDelay = Number(el.getAttribute('data-delay') || 0);
    const delay = window.innerWidth <= 720 ? Math.min(rawDelay, 140) : rawDelay;
    setTimeout(() => {
      el.classList.add('is-visible');
      el.querySelectorAll('.count-up').forEach(animateCounter);
    }, prefersReducedMotion ? 0 : delay);
  }

  let revealObserver = null;

  checkVisibleFallback = () => {
    if (!revealsStarted) return;
    const vh = window.innerHeight || document.documentElement.clientHeight || 800;
    for (const el of revealTargets) {
      if (el.dataset.revealed) continue;
      const rect = el.getBoundingClientRect();
      if (rect.top <= vh * 0.96 && rect.bottom >= -40) {
        revealElement(el);
        if (revealObserver) revealObserver.unobserve(el);
      } else if (rect.bottom < 0) {
        el.classList.add('is-visible');
        el.dataset.revealed = 'true';
        el.querySelectorAll('.count-up').forEach(animateCounter);
        if (revealObserver) revealObserver.unobserve(el);
      }
    }
  };

  startReveals = () => {
    if (revealsStarted) return;
    revealsStarted = true;

    if ('IntersectionObserver' in window) {
      revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            revealElement(entry.target);
            revealObserver.unobserve(entry.target);
          });
        },
        { threshold: 0.02, rootMargin: '0px 0px -16px 0px' }
      );
      revealTargets.forEach((item) => revealObserver.observe(item));
    } else {
      revealTargets.forEach(revealElement);
    }

    checkVisibleFallback();
  };

  if (!preloader || preloaderDismissed) startReveals();
  window.addEventListener('resize', () => {
    if (checkVisibleFallback) checkVisibleFallback();
  }, { passive: true });

  /* ------------------------------------------------------------------------
     7. Pointer & Mobile Touch Spotlight, 3D Card Tilt & Magnetic Buttons
     ------------------------------------------------------------------------ */
  if (!prefersReducedMotion) {
    if (window.matchMedia('(pointer: fine)').matches) {
      document.querySelectorAll('.spotlight-card').forEach((card) => {
        card.addEventListener('pointermove', (e) => {
          const rect = card.getBoundingClientRect();
          card.style.setProperty('--mx', `${e.clientX - rect.left}px`);
          card.style.setProperty('--my', `${e.clientY - rect.top}px`);
        });
      });

      document.querySelectorAll('.tilt-card').forEach((card) => {
        card.addEventListener('pointermove', (e) => {
          const rect = card.getBoundingClientRect();
          const x = (e.clientX - rect.left) / rect.width - 0.5;
          const y = (e.clientY - rect.top) / rect.height - 0.5;
          card.style.transform = `perspective(950px) rotateX(${(-y * 7).toFixed(2)}deg) rotateY(${(x * 7).toFixed(2)}deg) translateY(-2px)`;
        });
        card.addEventListener('pointerleave', () => {
          card.style.transform = '';
        });
      });

      document.querySelectorAll('.magnetic').forEach((btn) => {
        btn.addEventListener('pointermove', (e) => {
          const rect = btn.getBoundingClientRect();
          const dx = (e.clientX - (rect.left + rect.width / 2)) * 0.18;
          const dy = (e.clientY - (rect.top + rect.height / 2)) * 0.22;
          btn.style.transform = `translate3d(${dx.toFixed(1)}px, ${dy.toFixed(1)}px, 0)`;
        });
        btn.addEventListener('pointerleave', () => {
          btn.style.transform = '';
        });
      });
    } else {
      // Touch interactions for mobile phones & tablets
      document.querySelectorAll('.spotlight-card').forEach((card) => {
        let touchFadeTimer = null;
        const updateTouchSpot = (touch) => {
          if (!touch) return;
          const rect = card.getBoundingClientRect();
          card.style.setProperty('--mx', `${touch.clientX - rect.left}px`);
          card.style.setProperty('--my', `${touch.clientY - rect.top}px`);
          card.classList.add('is-touch-active');
          clearTimeout(touchFadeTimer);
        };
        card.addEventListener('touchstart', (e) => updateTouchSpot(e.touches[0]), { passive: true });
        card.addEventListener('touchmove', (e) => updateTouchSpot(e.touches[0]), { passive: true });
        const clearSpot = () => {
          clearTimeout(touchFadeTimer);
          touchFadeTimer = setTimeout(() => card.classList.remove('is-touch-active'), 420);
        };
        card.addEventListener('touchend', clearSpot, { passive: true });
        card.addEventListener('touchcancel', clearSpot, { passive: true });
      });

      document.querySelectorAll('.tilt-card').forEach((card) => {
        const updateTouchTilt = (touch) => {
          if (!touch) return;
          const rect = card.getBoundingClientRect();
          const x = (touch.clientX - rect.left) / rect.width - 0.5;
          const y = (touch.clientY - rect.top) / rect.height - 0.5;
          card.style.transform = `perspective(900px) rotateX(${(-y * 5).toFixed(2)}deg) rotateY(${(x * 5).toFixed(2)}deg) translateY(-2px)`;
        };
        card.addEventListener('touchstart', (e) => updateTouchTilt(e.touches[0]), { passive: true });
        card.addEventListener('touchmove', (e) => updateTouchTilt(e.touches[0]), { passive: true });
        const resetTilt = () => {
          card.style.transform = '';
        };
        card.addEventListener('touchend', resetTilt, { passive: true });
        card.addEventListener('touchcancel', resetTilt, { passive: true });
      });
    }
  }

  /* ------------------------------------------------------------------------
     8. Interactive Network Topology Background Canvas
     ------------------------------------------------------------------------ */
  const canvas = document.getElementById('networkCanvas');
  if (canvas && !prefersReducedMotion) {
    const ctx = canvas.getContext('2d');
    let width = 0;
    let height = 0;
    let nodes = [];
    let pulses = [];
    const pointer = { x: -9999, y: -9999 };

    function resizeCanvas() {
      const nextWidth = window.innerWidth;
      const nextHeight = window.innerHeight;
      const widthChanged = Math.abs(nextWidth - width) > 2;
      const majorHeightChanged = Math.abs(nextHeight - height) > 150;
      if (nodes.length > 0 && !widthChanged && !majorHeightChanged) return;

      width = nextWidth;
      height = nextHeight;
      const dprCap = width <= 768 ? 1.5 : 2;
      const dpr = Math.min(window.devicePixelRatio || 1, dprCap);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const minNodes = width <= 540 ? 18 : 24;
      const maxNodes = width <= 540 ? 30 : 58;
      const count = Math.min(maxNodes, Math.max(minNodes, Math.floor((width * height) / 24000)));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.46,
        vy: (Math.random() - 0.5) * 0.46,
        r: Math.random() * 1.8 + 1.3,
      }));
    }

    window.addEventListener('resize', resizeCanvas, { passive: true });
    window.addEventListener('pointermove', (e) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
    }, { passive: true });

    let touchResetTimer = null;
    const handleCanvasTouch = (e) => {
      const touch = e.touches && e.touches[0];
      if (!touch) return;
      pointer.x = touch.clientX;
      pointer.y = touch.clientY;
      clearTimeout(touchResetTimer);
    };
    window.addEventListener('touchstart', handleCanvasTouch, { passive: true });
    window.addEventListener('touchmove', handleCanvasTouch, { passive: true });
    window.addEventListener('touchend', () => {
      clearTimeout(touchResetTimer);
      touchResetTimer = setTimeout(() => {
        pointer.x = -9999;
        pointer.y = -9999;
      }, 650);
    }, { passive: true });
    resizeCanvas();

    function spawnPulse(a, b) {
      if (pulses.length < 18 && Math.random() < 0.015) {
        pulses.push({ a, b, t: 0, speed: 0.018 + Math.random() * 0.018 });
      }
    }

    function renderFrame() {
      ctx.clearRect(0, 0, width, height);
      const isLight = rootEl.getAttribute('data-theme') === 'light';
      const nodeColor = isLight ? 'rgba(37, 99, 235, 0.45)' : 'rgba(34, 211, 238, 0.55)';
      const lineBase = isLight ? '37, 99, 235' : '56, 189, 248';
      const maxDist = 155;

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;

        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;

        // Gentle pointer attraction/repulsion
        const pdx = pointer.x - n.x;
        const pdy = pointer.y - n.y;
        const pDist = Math.hypot(pdx, pdy);
        if (pDist < 170 && pDist > 1) {
          n.x -= (pdx / pDist) * 0.25;
          n.y -= (pdy / pDist) * 0.25;
        }

        // Draw links
        for (let j = i + 1; j < nodes.length; j++) {
          const m = nodes[j];
          const dist = Math.hypot(n.x - m.x, n.y - m.y);
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * (isLight ? 0.16 : 0.24);
            ctx.strokeStyle = `rgba(${lineBase}, ${alpha.toFixed(3)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(m.x, m.y);
            ctx.stroke();
            spawnPulse(n, m);
          }
        }

        // Pointer link highlight
        if (pDist < 190) {
          const alpha = (1 - pDist / 190) * 0.38;
          ctx.strokeStyle = `rgba(34, 211, 238, ${alpha.toFixed(3)})`;
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ctx.moveTo(n.x, n.y);
          ctx.lineTo(pointer.x, pointer.y);
          ctx.stroke();
        }

        ctx.fillStyle = nodeColor;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw animated packet pulses along connected nodes
      pulses = pulses.filter((p) => p.t <= 1);
      for (const p of pulses) {
        const px = p.a.x + (p.b.x - p.a.x) * p.t;
        const py = p.a.y + (p.b.y - p.a.y) * p.t;
        ctx.fillStyle = isLight ? '#0891b2' : '#22d3ee';
        ctx.beginPath();
        ctx.arc(px, py, 2.2, 0, Math.PI * 2);
        ctx.fill();
        p.t += p.speed;
      }

      requestAnimationFrame(renderFrame);
    }

    requestAnimationFrame(renderFrame);
  }

  /* ------------------------------------------------------------------------
     9. Interactive Network & CCTV Topology Lab
     ------------------------------------------------------------------------ */
  const labTabs = document.querySelectorAll('.lab-tab');
  const topologyStage = document.getElementById('topologyStage');
  const labScenarioCode = document.getElementById('labScenarioCode');
  const labHealthBadge = document.getElementById('labHealthBadge');
  const labTitle = document.getElementById('labTitle');
  const labDesc = document.getElementById('labDesc');
  const labLatency = document.getElementById('labLatency');
  const labLoss = document.getElementById('labLoss');
  const labSpeed = document.getElementById('labSpeed');
  const labLog = document.getElementById('labLog');

  const scenarioMetrics = {
    normal: { badgeClass: 'badge badge-emerald', latency: '1.2 ms', loss: '0.00%', speed: '1000 Mbps' },
    vlan: { badgeClass: 'badge badge-cyan', latency: '0.9 ms', loss: '0.00%', speed: '1000 Mbps' },
    conflict: { badgeClass: 'badge badge-amber', latency: '1.4 ms', loss: '0.00%', speed: '1000 Mbps' },
    cctv: { badgeClass: 'badge badge-blue', latency: '1.6 ms', loss: '0.00%', speed: '1000 Mbps' },
  };

  function renderScenario(key) {
    const metrics = scenarioMetrics[key];
    const t = getT();
    const localized = t.scenarios?.[key] || translations.en.scenarios[key];
    if (!metrics || !localized || !topologyStage) return;

    currentScenarioKey = key;
    labTabs.forEach((tEl) => {
      const isActive = tEl.getAttribute('data-scenario') === key;
      tEl.classList.toggle('active', isActive);
      tEl.setAttribute('aria-selected', String(isActive));
    });

    topologyStage.setAttribute('data-scenario', key);
    topologyStage.querySelectorAll('svg').forEach((svg) => {
      if (typeof svg.unpauseAnimations === 'function') svg.unpauseAnimations();
    });
    labScenarioCode.textContent = localized.code;
    labHealthBadge.textContent = localized.badge;
    labHealthBadge.className = metrics.badgeClass;
    labTitle.textContent = localized.title;
    labDesc.textContent = localized.desc;
    labLatency.textContent = metrics.latency;
    labLoss.textContent = metrics.loss;
    labSpeed.textContent = metrics.speed;

    labLog.innerHTML = '';
    localized.logs.forEach(([cls, tag, msg]) => {
      const row = document.createElement('div');
      const span = document.createElement('span');
      span.className = cls;
      span.textContent = tag;
      row.appendChild(span);
      row.appendChild(document.createTextNode(` ${msg}`));
      labLog.appendChild(row);
    });
  }

  onScenarioRefresh = () => renderScenario(currentScenarioKey);

  labTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const key = tab.getAttribute('data-scenario');
      if (key) renderScenario(key);
    });
  });

  // Render initial scenario in saved/default language
  renderScenario(currentScenarioKey);

  /* ------------------------------------------------------------------------
     10. Filterable Technical Skills Matrix
     ------------------------------------------------------------------------ */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const skillCards = document.querySelectorAll('.skill-card');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const cat = btn.getAttribute('data-filter');
      filterBtns.forEach((b) => b.classList.toggle('active', b === btn));

      skillCards.forEach((card, idx) => {
        const match = cat === 'all' || card.getAttribute('data-category') === cat;
        card.classList.toggle('is-hidden', !match);
        if (match) {
          card.classList.remove('is-entering');
          void card.offsetWidth; // trigger reflow for smooth stagger
          card.style.animationDelay = `${idx * 45}ms`;
          card.classList.add('is-entering', 'is-visible');
        }
      });
    });
  });

  /* ------------------------------------------------------------------------
     11. Interactive kun@noc:~$ Terminal Emulator
     ------------------------------------------------------------------------ */
  const terminalOutput = document.getElementById('terminalOutput');
  const terminalForm = document.getElementById('terminalForm');
  const terminalInput = document.getElementById('terminalInput');
  const terminalClearBtn = document.getElementById('terminalClearBtn');
  const cmdHistory = [];
  let historyIdx = -1;

  const commands = {
    help: () => [
      { cls: 't-accent', text: 'Available commands:' },
      { cls: 't-muted', text: '  whoami          - Candidate identity & target role' },
      { cls: 't-muted', text: '  skills          - Core IT, networking & CCTV stack' },
      { cls: 't-muted', text: '  experience      - KTC Engineering & ITI field log' },
      { cls: 't-muted', text: '  education       - ITI Degrees & MLVT approvals' },
      { cls: 't-muted', text: '  vlan show       - Sample enterprise/CCTV VLAN map' },
      { cls: 't-muted', text: '  ping ktc-switch - Run live diagnostic ping simulation' },
      { cls: 't-muted', text: '  contact         - Phone, email, location & reference' },
      { cls: 't-muted', text: '  clear           - Clear console output' },
    ],
    whoami: () => [
      { cls: 't-ok', text: 'NAME     : Kun Amra' },
      { cls: 't-muted', text: 'ROLE     : IT Support Officer / Network Technician' },
      { cls: 't-muted', text: 'LOCATION : Sangkat Mean Chey, Khan Mean Chey, Phnom Penh' },
      { cls: 't-muted', text: 'DEGREE   : Bachelor of Technology in IT (ITI, 2023-2025)' },
    ],
    skills: () => [
      { cls: 't-accent', text: '[NETWORK]  Routers, L2/L3 Switches, APs, TCP/IP, DHCP, Subnetting' },
      { cls: 't-accent', text: '[SECURITY] VLAN Segmentation, Bandwidth Allocation' },
      { cls: 't-accent', text: '[SYSTEMS]  Windows OS Setup, Partitioning, Workstation Mapping, Domain' },
      { cls: 't-accent', text: '[CCTV]     Analog & IP Cameras, Site Layout, NVR/DVR Backup Storage' },
      { cls: 't-accent', text: '[CABLING]  Cat5e/Cat6 Termination, Patching, Drop & IP Conflict Fix' },
    ],
    experience: () => [
      { cls: 't-ok', text: '[12-2025 - 06-2026] CCTV & Network Technician @ KTC Engineering' },
      { cls: 't-muted', text: '  -> Routers, switches, APs, TCP/IP & DHCP workstation setup' },
      { cls: 't-muted', text: '  -> Analog/IP camera alignment, NVR/DVR backup & Cat5e/Cat6 cabling' },
      { cls: 't-ok', text: '[LAB PROJECTS] CCTV & Network Technician @ ITI' },
      { cls: 't-muted', text: '  -> Multi-node lab topology config & IP/cabling troubleshooting' },
    ],
    education: () => [
      { cls: 't-ok', text: '2023-2025 : Bachelor of Technology in IT (ITI, Exam: Oct 06, 2025)' },
      { cls: 't-ok', text: '2021-2023 : Technical Higher Diploma in IT (ITI, MLVT Approved)' },
      { cls: 't-muted', text: '2019-2021 : High School Diploma (Hun Sen Cheung Chnok High School)' },
      { cls: 't-muted', text: '2015-2019 : Secondary School (Chealea Secondary School)' },
    ],
    'vlan show': () => [
      { cls: 't-accent', text: 'VLAN  NAME              SUBNET          STATUS' },
      { cls: 't-ok', text: '10    WORKSTATIONS      10.10.10.0/24   ACTIVE (Domain + DHCP)' },
      { cls: 't-ok', text: '20    CCTV_NVR_BACKUP   10.10.20.0/24   ACTIVE (IP/Analog Stream)' },
      { cls: 't-ok', text: '30    WIRELESS_AP       10.10.30.0/24   ACTIVE (QoS Enforced)' },
    ],
    contact: () => [
      { cls: 't-ok', text: 'PHONE     : 069-524-314' },
      { cls: 't-ok', text: 'EMAIL     : kunamracambodia@gmail.com' },
      { cls: 't-muted', text: 'REFERENCE : Mr. Thiv Rathana (VP of IT Dept) - 012 211 015' },
    ],
  };

  function appendTerminalLine(text, cls = 't-muted') {
    if (!terminalOutput) return;
    const div = document.createElement('div');
    div.className = `t-line ${cls}`;
    div.textContent = text;
    terminalOutput.appendChild(div);
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
  }

  function runTerminalCommand(raw) {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;

    cmdHistory.unshift(raw.trim());
    historyIdx = -1;
    appendTerminalLine(`kun@noc:~$ ${raw.trim()}`, 't-cmd');

    if (cmd === 'clear') {
      terminalOutput.innerHTML = '';
      appendTerminalLine('Console cleared. Type "help" for commands.', 't-muted');
      return;
    }

    if (cmd === 'ping ktc-switch') {
      appendTerminalLine('PING ktc-switch (10.10.10.2) 56(84) bytes of data.', 't-accent');
      const times = ['0.94', '1.08', '0.89'];
      times.forEach((ms, i) => {
        setTimeout(() => {
          appendTerminalLine(`64 bytes from 10.10.10.2: icmp_seq=${i + 1} ttl=64 time=${ms} ms`, 't-ok');
          if (i === times.length - 1) {
            appendTerminalLine('--- 10.10.10.2 ping statistics: 3 transmitted, 3 received, 0% loss ---', 't-muted');
          }
        }, (i + 1) * 260);
      });
      return;
    }

    const handler = commands[cmd];
    if (handler) {
      handler().forEach((line) => appendTerminalLine(line.text, line.cls));
    } else {
      appendTerminalLine(`Command not found: "${cmd}". Type "help" for valid commands.`, 't-muted');
    }
  }

  if (terminalForm && terminalInput) {
    terminalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      runTerminalCommand(terminalInput.value);
      terminalInput.value = '';
    });

    terminalInput.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowUp' && cmdHistory.length > 0) {
        e.preventDefault();
        historyIdx = Math.min(cmdHistory.length - 1, historyIdx + 1);
        terminalInput.value = cmdHistory[historyIdx];
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        historyIdx = Math.max(-1, historyIdx - 1);
        terminalInput.value = historyIdx === -1 ? '' : cmdHistory[historyIdx];
      }
    });
  }

  document.querySelectorAll('.cmd-chip').forEach((chip) => {
    chip.addEventListener('click', () => {
      const cmd = chip.getAttribute('data-cmd');
      if (cmd) runTerminalCommand(cmd);
    });
  });

  if (terminalClearBtn) {
    terminalClearBtn.addEventListener('click', () => runTerminalCommand('clear'));
  }

  /* ------------------------------------------------------------------------
     12. Certificate Lightbox & Cover Letter Modals
     ------------------------------------------------------------------------ */
  const certModal = document.getElementById('certModal');
  const certModalImg = document.getElementById('certModalImg');
  const certModalTitle = document.getElementById('certModalTitle');
  const certModalSub = document.getElementById('certModalSub');
  const certViewport = document.getElementById('certViewport');
  const certZoomBtn = document.getElementById('certZoomBtn');
  const certCloseBtn = document.getElementById('certCloseBtn');

  const coverModal = document.getElementById('coverModal');
  const coverCloseBtn = document.getElementById('coverCloseBtn');
  const coverCloseFooterBtn = document.getElementById('coverCloseFooterBtn');

  const phoneModal = document.getElementById('phoneModal');
  const phoneModalTitle = document.getElementById('phoneModalTitle');
  const phoneModalSub = document.getElementById('phoneModalSub');
  const phoneCallLink = document.getElementById('phoneCallLink');
  const phoneCallSub = document.getElementById('phoneCallSub');
  const phoneTelegramLink = document.getElementById('phoneTelegramLink');
  const phoneTelegramSub = document.getElementById('phoneTelegramSub');
  const phoneModalCopyBtn = document.getElementById('phoneModalCopyBtn');
  const phoneCloseBtn = document.getElementById('phoneCloseBtn');
  const phoneCancelBtn = document.getElementById('phoneCancelBtn');

  function openModal(modal) {
    if (!modal) return;
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
  }

  function closeModal(modal) {
    if (!modal) return;
    modal.hidden = true;
    document.body.style.overflow = '';
    if (certViewport) {
      certViewport.classList.remove('is-zoomed');
      if (certZoomBtn) {
        certZoomBtn.setAttribute('data-i18n', 'cert_zoom_in');
        certZoomBtn.textContent = getT().cert_zoom_in;
      }
    }
  }

  document.querySelectorAll('.cert-trigger').forEach((btn) => {
    btn.addEventListener('click', () => {
      if (!certModal || !certModalImg) return;
      certModalImg.src = btn.getAttribute('data-cert-src') || '';
      certModalTitle.textContent = btn.getAttribute('data-cert-title') || getT().cert_default_title;
      certModalSub.textContent = btn.getAttribute('data-cert-sub') || '';
      openModal(certModal);
    });
  });

  if (certZoomBtn && certViewport) {
    certZoomBtn.addEventListener('click', () => {
      const zoomed = certViewport.classList.toggle('is-zoomed');
      const key = zoomed ? 'cert_zoom_out' : 'cert_zoom_in';
      certZoomBtn.setAttribute('data-i18n', key);
      certZoomBtn.textContent = getT()[key];
    });
  }

  if (certCloseBtn) certCloseBtn.addEventListener('click', () => closeModal(certModal));
  if (certModal) {
    certModal.addEventListener('click', (e) => {
      if (e.target === certModal) closeModal(certModal);
    });
  }

  ['openCoverLetterHeader', 'openCoverLetterHero', 'openCoverLetterMobile', 'openCoverLetterContact'].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('click', () => openModal(coverModal));
  });

  if (coverCloseBtn) coverCloseBtn.addEventListener('click', () => closeModal(coverModal));
  if (coverCloseFooterBtn) coverCloseFooterBtn.addEventListener('click', () => closeModal(coverModal));
  if (coverModal) {
    coverModal.addEventListener('click', (e) => {
      if (e.target === coverModal) closeModal(coverModal);
    });
  }

  document.querySelectorAll('.phone-trigger').forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const display = trigger.getAttribute('data-phone-display') || '069-524-314';
      const e164 = trigger.getAttribute('data-phone-e164') || '+85569524314';
      const label = trigger.getAttribute('data-phone-label') || 'Kun Amra';

      if (phoneModalTitle) phoneModalTitle.textContent = label;
      if (phoneModalSub) phoneModalSub.textContent = `${display} • ${e164}`;
      if (phoneCallLink) phoneCallLink.href = `tel:${e164}`;
      if (phoneCallSub) phoneCallSub.textContent = `${getT().phone_dial_prefix}${e164}`;
      if (phoneTelegramLink) phoneTelegramLink.href = `https://t.me/${e164}`;
      if (phoneTelegramSub) phoneTelegramSub.textContent = `t.me/${e164}`;
      if (phoneModalCopyBtn) phoneModalCopyBtn.setAttribute('data-copy', display);

      openModal(phoneModal);
    });
  });

  if (phoneCloseBtn) phoneCloseBtn.addEventListener('click', () => closeModal(phoneModal));
  if (phoneCancelBtn) phoneCancelBtn.addEventListener('click', () => closeModal(phoneModal));
  if (phoneModal) {
    phoneModal.addEventListener('click', (e) => {
      if (e.target === phoneModal) closeModal(phoneModal);
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (certModal && !certModal.hidden) closeModal(certModal);
      if (coverModal && !coverModal.hidden) closeModal(coverModal);
      if (phoneModal && !phoneModal.hidden) closeModal(phoneModal);
    }
  });

  /* ------------------------------------------------------------------------
     13. Smart Contact Form Email Dispatch
     ------------------------------------------------------------------------ */
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('senderName').value.trim();
      const subject = document.getElementById('senderSubject').value.trim();
      const message = document.getElementById('senderMessage').value.trim();

      const fullSubject = encodeURIComponent(`[Portfolio Inquiry] ${subject} — ${name}`);
      const fullBody = encodeURIComponent(`From: ${name}\n\n${message}`);
      window.location.href = `mailto:kunamracambodia@gmail.com?subject=${fullSubject}&body=${fullBody}`;
      showToast(getT().toast_email_open);
    });
  }
})();
