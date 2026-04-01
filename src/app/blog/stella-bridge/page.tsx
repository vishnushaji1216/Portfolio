import React from 'react';
import Link from 'next/link';
import styles from './StellaBridgePage.module.css';

export default function StellaBridgeCaseStudy() {
  return (
    <div className={styles.pageWrapper}>
      <main className={styles.container}>
        
        <Link href="/blog" className={styles.backLink}>
          ← Back to case studies
        </Link>

        {/* HERO SECTION */}
        <section className={styles.hero}>
          <div className={`${styles.heroBadge} ${styles.monoText}`}>
            Delivered to client · 2026 · Android
          </div>
          <h1 className={styles.heroTitle}>Stella Bridge App</h1>
          <p className={styles.heroTagline} style={{ marginBottom: '1.5rem' }}>
            A school&apos;s complete digital operating system — built in React Native and Node.js
          </p>
          <div className={`${styles.heroStats} ${styles.monoText}`}>
            35+ Screens  ·  3 User Roles  ·  Delivered 2026
          </div>
          <Link href="#" className={styles.btnPrimary}>
            View on GitHub
          </Link>
        </section>

        {/* PROBLEM & SOLUTION SECTION */}
        <section className={styles.section}>
          <div className={styles.twoColumn}>
            <div className={styles.textBlock}>
              <h3>The Problem</h3>
              <p>
                The school was running on WhatsApp groups, scattered spreadsheets, and physical notebooks. 
                Teachers manually chased parents for fees. Grades lived in five places. They needed everything in one place.
              </p>
            </div>
            <div className={styles.textBlock}>
              <h3>The Solution</h3>
              <p>
                A full mobile app + admin web portal serving three user roles (students, teachers, admins) across <strong className={styles.accentText}>35+ screens</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* KEY FEATURES */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Key Features</h2>
          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <span className={`${styles.featurePrefix} ${styles.monoText}`}>01 —</span>
              <h4>Dashboards</h4>
              <p>Student &amp; teacher dashboards populated with live data.</p>
            </div>
            <div className={styles.featureCard}>
              <span className={`${styles.featurePrefix} ${styles.monoText}`}>02 —</span>
              <h4>Submit Assignments</h4>
              <p>Submission via phone camera (handwriting) and microphone (audio reading).</p>
            </div>
            <div className={styles.featureCard}>
              <span className={`${styles.featurePrefix} ${styles.monoText}`}>03 —</span>
              <h4>Mobile Quizzes</h4>
              <p>Interactive quizzes featuring automated grading and comprehensive analytics.</p>
            </div>
            <div className={styles.featureCard}>
              <span className={`${styles.featurePrefix} ${styles.monoText}`}>04 —</span>
              <h4>Fee Management</h4>
              <p>Automated account lockouts for tuition fee defaulters.</p>
            </div>
            <div className={styles.featureCard}>
              <span className={`${styles.featurePrefix} ${styles.monoText}`}>05 —</span>
              <h4>Push Announcements</h4>
              <p>School-wide announcements pushed instantly to all users.</p>
            </div>
            <div className={styles.featureCard}>
              <span className={`${styles.featurePrefix} ${styles.monoText}`}>06 —</span>
              <h4>Behavior Tracking</h4>
              <p>Tracked behavior logs visible to parents in real time.</p>
            </div>
            <div className={styles.featureCard}>
              <span className={`${styles.featurePrefix} ${styles.monoText}`}>07 —</span>
              <h4>Bulk Onboarding</h4>
              <p>Automated onboarding of students &amp; teachers via Excel upload.</p>
            </div>
          </div>
        </section>

        {/* ARCHITECTURE */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Architecture</h2>
          <div className={styles.architectureVis}>
            <div className={styles.tierBlock}>
              <div className={`${styles.tierTitle} ${styles.monoText}`}>Client Tier</div>
              <div className={styles.tierDesc}>React Native app (students/teachers) + React/Vite web (admins)</div>
            </div>
            <div className={styles.tierArrow}>↓</div>
            <div className={styles.tierBlock}>
              <div className={`${styles.tierTitle} ${styles.monoText}`}>Server Tier</div>
              <div className={styles.tierDesc}>Express REST API with role-based middleware (authCheck, teacherCheck, adminCheck)</div>
            </div>
            <div className={styles.tierArrow}>↓</div>
            <div className={styles.tierBlock}>
              <div className={`${styles.tierTitle} ${styles.monoText}`}>Storage Tier</div>
              <div className={styles.tierDesc}>MongoDB for data, Supabase for binary files (audio, images)</div>
            </div>
          </div>
        </section>

        {/* NOTABLE TECHNICAL CHALLENGE */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Notable Technical Challenge</h2>
          <div className={styles.challengeBox}>
            <p>
              <strong>Building a fee lockout system.</strong> When a student&apos;s fees are overdue, their app access is automatically disabled until payment is cleared. This required a synchronized approach: a middleware gate on every login request, an admin toggle endpoint on the backend, and a dynamic <code>LockScreen</code> component on the frontend that prevents any navigation.
            </p>
          </div>
        </section>

        {/* TECH STACK */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Tech Stack Breakdown</h2>
          <div className={styles.stackLayer}>
            <h4 className={styles.monoText}>Frontend Mobile</h4>
            <div className={styles.pillList}>
              <span className={`${styles.pill} ${styles.monoText}`}>React Native v0.82.1</span>
              <span className={`${styles.pill} ${styles.monoText}`}>React Navigation</span>
              <span className={`${styles.pill} ${styles.monoText}`}>Vision Camera</span>
              <span className={`${styles.pill} ${styles.monoText}`}>Audio Record</span>
            </div>
          </div>
          <div className={styles.stackLayer}>
            <h4 className={styles.monoText}>Admin Web</h4>
            <div className={styles.pillList}>
              <span className={`${styles.pill} ${styles.monoText}`}>React 19 + Vite</span>
              <span className={`${styles.pill} ${styles.monoText}`}>React Router DOM</span>
            </div>
          </div>
          <div className={styles.stackLayer}>
            <h4 className={styles.monoText}>Backend</h4>
            <div className={styles.pillList}>
              <span className={`${styles.pill} ${styles.monoText}`}>Node.js</span>
              <span className={`${styles.pill} ${styles.monoText}`}>Express v5</span>
              <span className={`${styles.pill} ${styles.monoText}`}>MongoDB</span>
              <span className={`${styles.pill} ${styles.monoText}`}>Mongoose</span>
              <span className={`${styles.pill} ${styles.monoText}`}>JWT</span>
              <span className={`${styles.pill} ${styles.monoText}`}>bcryptjs</span>
              <span className={`${styles.pill} ${styles.monoText}`}>Multer</span>
              <span className={`${styles.pill} ${styles.monoText}`}>Node-cron</span>
            </div>
          </div>
          <div className={styles.stackLayer}>
            <h4 className={styles.monoText}>Storage</h4>
            <div className={styles.pillList}>
              <span className={`${styles.pill} ${styles.monoText}`}>Supabase Buckets</span>
            </div>
          </div>
        </section>

        {/* OUTCOME / IMPACT */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Outcome &amp; Impact</h2>
          <div className={styles.outcomeGrid}>
            <div className={styles.outcomeCard}>
              <div className={styles.outcomeKeyword}>Time saved</div>
              <p>Teachers reclaimed hours previously lost to manual grading and communication.</p>
            </div>
            <div className={styles.outcomeCard}>
              <div className={styles.outcomeKeyword}>Instant reach</div>
              <p>School-wide broadcasts now reach everyone instantly.</p>
            </div>
            <div className={styles.outcomeCard}>
              <div className={styles.outcomeKeyword}>Fee recovery</div>
              <p>Fee collection improved significantly due to the comprehensive lockout mechanism.</p>
            </div>
            <div className={styles.outcomeCard}>
              <div className={styles.outcomeKeyword}>Transparency</div>
              <p>Parents gained unprecedented real-time visibility into their child&apos;s behavior and grades.</p>
            </div>
          </div>
        </section>

        {/* CTA FOOTER */}
        <section className={styles.ctaSection}>
          <h2>Have a similar project in mind?</h2>
          <Link href="/#contact" className={styles.btnPrimary} style={{ marginTop: '1rem' }}>
            Let&apos;s talk
          </Link>
        </section>

      </main>
    </div>
  );
}
