import React from "react";
import { QuickTopicNav } from "@/components/QuickTopicNav";
import { BackToTop } from "@/components/BackToTop";
import {
  KeyPoint,
  RememberBox,
  WarningBox,
  ExamTarget,
  FormulaBox,
} from "@/components/CalloutBoxes";
import { MathView } from "@/components/MathView";
import { Flame, Activity, Waves, Radio, Eye, Zap, Sparkles, BookOpen } from "lucide-react";

function HR() {
  return <hr className="my-8 border-t border-zinc-200/80" />;
}

function TopicHeading({
  num,
  title,
  extra,
  pastelBadgeClass = "bg-orange-100/80 text-orange-900 border-orange-200",
}: {
  num: string;
  title: string;
  extra?: string;
  pastelBadgeClass?: string;
}) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-zinc-200 pb-2.5 mb-6">
      <h3 className="text-base sm:text-lg font-bold text-zinc-900 tracking-tight flex items-center gap-2">
        <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-md bg-zinc-100 text-zinc-600 border border-zinc-200">
          {num}
        </span>
        <span>{title}</span>
      </h3>
      {extra && (
        <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${pastelBadgeClass}`}>
          {extra}
        </span>
      )}
    </div>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="text-sm font-bold text-zinc-800 tracking-tight mt-6 mb-3 flex items-center gap-1.5">
      <span className="w-1.5 h-4 rounded-full bg-zinc-400 inline-block"></span>
      {children}
    </h4>
  );
}

function PartHeader({
  part,
  title,
  questions,
  accentBg,
  accentText,
}: {
  part: string;
  title: string;
  questions: string;
  accentBg: string;
  accentText: string;
}) {
  return (
    <div className={`mb-8 p-4 sm:p-5 rounded-2xl border ${accentBg}`}>
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div>
          <p className={`text-[11px] font-extrabold uppercase tracking-widest ${accentText} mb-0.5`}>
            {part}
          </p>
          <h2 className="text-lg sm:text-xl font-extrabold text-zinc-950 tracking-tight">
            {title}
          </h2>
        </div>
        <span className={`text-xs font-semibold px-3 py-1 rounded-full bg-white/90 border border-zinc-200/60 shadow-2xs ${accentText}`}>
          {questions}
        </span>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fafafc] text-zinc-900 selection:bg-amber-100 selection:text-amber-900">
      {/* ── HEADER ── */}
      <header className="border-b border-zinc-200 bg-white pt-10 pb-8 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-900 border border-amber-200/80 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>สรุปเนื้อหาเจาะลึก 46 ข้อ • สำหรับทบทวนด่วนก่อนสอบ</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-950">
            วิทยาศาสตร์ 5 <span className="text-zinc-500 font-normal">(ว33101)</span>
          </h1>

          <p className="text-zinc-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            เรียบเรียงเน้นจุดออกสอบ เข้าใจง่าย จำได้ไว ด้วยสัญลักษณ์สีแยกตามหัวข้อ
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-2 text-xs font-semibold">
            <span className="px-2.5 py-1 rounded-md bg-orange-50 text-orange-800 border border-orange-200/80">
              🌋 ภูเขาไฟ (8 ข้อ)
            </span>
            <span className="px-2.5 py-1 rounded-md bg-amber-50 text-amber-800 border border-amber-200/80">
              📈 แผ่นดินไหว (16 ข้อ)
            </span>
            <span className="px-2.5 py-1 rounded-md bg-sky-50 text-sky-800 border border-sky-200/80">
              🌊 สึนามิ (3 ข้อ)
            </span>
            <span className="px-2.5 py-1 rounded-md bg-indigo-50 text-indigo-800 border border-indigo-200/80">
              〰️ คลื่นกล (5 ข้อ)
            </span>
            <span className="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200/80">
              🔊 เสียง (6 ข้อ)
            </span>
            <span className="px-2.5 py-1 rounded-md bg-fuchsia-50 text-fuchsia-800 border border-fuchsia-200/80">
              🎨 แสงสี (7 ข้อ)
            </span>
          </div>
        </div>
      </header>

      {/* ── STICKY NAV ── */}
      <QuickTopicNav />

      {/* ── CONTENT ── */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14 space-y-12">

        {/* ============================================================ */}
        {/* PART 1: ธรณีพิบัติภัย (Orange / Peach Pastel)               */}
        {/* ============================================================ */}
        <div>
          <PartHeader
            part="Part 1"
            title="ส่วนที่ 1: ธรณีพิบัติภัย"
            questions="ออกสอบ 27 ข้อ (สัดส่วนสูงสุด)"
            accentBg="bg-orange-50/70 border-orange-200/80"
            accentText="text-orange-950"
          />

          {/* ── 01 ภูเขาไฟระเบิด ── */}
          <section id="volcano" className="scroll-mt-24 mb-12">
            <TopicHeading
              num="01"
              title="ภูเขาไฟระเบิด"
              extra="ออกสอบ 8 ข้อ"
              pastelBadgeClass="bg-orange-100 text-orange-900 border-orange-300"
            />

            <SubHeading>1.1 สาเหตุและกระบวนการเกิด (3 ข้อ)</SubHeading>

            <div className="space-y-4 text-sm sm:text-base text-zinc-800 leading-relaxed">
              <div className="p-3.5 rounded-xl bg-orange-50/40 border border-orange-100">
                <p className="font-bold text-orange-950">1. กลไกการเกิด:</p>
                <p className="mt-1 text-zinc-700">
                  เกิดจาก <strong className="text-zinc-950">แมกมา (Magma)</strong> หรือหินหนืดใต้เปลือกโลกมีความดันและอุณหภูมิสูงมาก แทรกดันขึ้นมาตามช่องว่าง รอยแตก หรือจุดอ่อน เมื่อแมกมาพุ่งขึ้นสู่ผิวโลกจะเรียกว่า <strong className="text-zinc-950">ลาวา (Lava)</strong>
                </p>
              </div>

              <div>
                <p className="font-bold text-zinc-900 mb-1.5">2. บริเวณที่พบภูเขาไฟ:</p>
                <div className="grid sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                  <div className="p-3.5 rounded-xl bg-red-50/50 border border-red-200/70">
                    <strong className="text-red-950 block mb-1">แนวรอยต่อแผ่นธรณี (80%)</strong>
                    หนาแน่นที่สุดบริเวณ <strong className="text-red-700 font-bold">&ldquo;วงแหวนไฟ&rdquo; (Ring of Fire)</strong> เช่น แนวรอยต่อแบบมุดตัว (Subduction Zone)
                  </div>
                  <div className="p-3.5 rounded-xl bg-amber-50/50 border border-amber-200/70">
                    <strong className="text-amber-950 block mb-1">จุดร้อน (Hotspot)</strong>
                    เกิดจากสายแมกมา (Mantle Plume) ดันขึ้นจากเนื้อโลกโดยตรง ไม่จำกัดเฉพาะรอยต่อ เกิดเป็นเกาะเรียง เช่น <strong>หมู่เกาะฮาวาย</strong>
                  </div>
                </div>
              </div>

              <div>
                <p className="font-bold text-zinc-900 mb-1.5">3. สิ่งที่ปลดปล่อยจากการระเบิด:</p>
                <div className="overflow-x-auto rounded-xl border border-zinc-200">
                  <table className="w-full text-xs sm:text-sm text-left">
                    <thead className="bg-orange-100/70 text-orange-950 border-b border-orange-200 font-bold">
                      <tr>
                        <th className="p-3">สถานะ</th>
                        <th className="p-3">รายละเอียดสำคัญ</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-200 bg-white">
                      <tr>
                        <td className="p-3 font-semibold text-zinc-900">แก๊ส (50–80%)</td>
                        <td className="p-3">ส่วนใหญ่คือ <strong className="text-orange-950">ไอน้ำ (<MathView math="H_2O" />)</strong> รองลงมาคือ <MathView math="SO_2, H_2S" /> และ <MathView math="CO_2" /> (พบน้อยที่สุด: <MathView math="HCl, Cl_2" />)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-zinc-900">ของเหลว</td>
                        <td className="p-3">ลาวาชนิดต่าง ๆ ที่พุ่งขึ้นสู่พื้นผิว</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-zinc-900">ของแข็ง</td>
                        <td className="p-3">เศษหิน และ <strong className="text-orange-950">เถ้าภูเขาไฟ (Volcanic Ash)</strong></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <RememberBox title="สัญญาณบอกเหตุก่อนภูเขาไฟระเบิด">
                <ul className="list-disc pl-5 space-y-1">
                  <li>เกิดการสั่นสะเทือนของแผ่นดินไหวในพื้นที่</li>
                  <li>มีเสียงคล้ายฟ้าร้องกึกก้องใต้ดิน</li>
                  <li>อุณหภูมิของน้ำใต้ดินหรือพื้นผิวสูงขึ้นผิดปกติ</li>
                  <li>มีแก๊สพุ่งออกมาจากรอยแตกของพื้นผิวมากขึ้น</li>
                </ul>
              </RememberBox>
            </div>

            <HR />

            <SubHeading>1.2 ผลกระทบ ประโยชน์ และการปฏิบัติตน (5 ข้อ)</SubHeading>

            <div className="space-y-4 text-sm sm:text-base text-zinc-800 leading-relaxed">
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="p-4 rounded-xl bg-rose-50/60 border border-rose-200/80">
                  <h5 className="font-bold text-rose-950 text-sm mb-2">💥 ผลกระทบและโทษ:</h5>
                  <ul className="text-xs sm:text-sm list-disc pl-4 space-y-1 text-rose-900">
                    <li><strong>กายภาพ:</strong> ลาวาทำลายสิ่งปลูกสร้าง, โคลนไหล (Lahar) ทับถมบ้านเรือน</li>
                    <li><strong>บรรยากาศ:</strong> เถ้าภูเขาไฟบดบังแสงอาทิตย์ → <strong className="text-rose-950 underline">ภูมิอากาศโลกเย็นลงชั่วคราว</strong></li>
                    <li><strong>ฝนกรด:</strong> <MathView math="SO_2 + H_2O \rightarrow \text{ฝนกรด}" /></li>
                    <li><strong>ภัยต่อเนื่อง:</strong> แผ่นดินไหว และ <strong className="text-sky-800">สึนามิ</strong></li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200/80">
                  <h5 className="font-bold text-emerald-950 text-sm mb-2">🌿 ประโยชน์ของภูเขาไฟ:</h5>
                  <ul className="text-xs sm:text-sm list-disc pl-4 space-y-1 text-emerald-900">
                    <li><strong>ดินอุดมสมบูรณ์:</strong> แร่ธาตุจากการผุพัง (จันทบุรี, บุรีรัมย์)</li>
                    <li><strong>อัญมณี:</strong> ทับทิม ไพลิน พลอย พบในหินบะซอลต์ (อ.เฉลิมพระเกียรติ จ.บุรีรัมย์)</li>
                    <li><strong>อุตสาหกรรม:</strong> หินไรโอไลต์ผุพังเป็น <strong className="text-emerald-950">แร่ดินขาว (Kaolin)</strong> ทำเซรามิก</li>
                    <li><strong>ท่องเที่ยว:</strong> เขากระโดง (บุรีรัมย์), บ้านน้ำเดือด (เพชรบูรณ์)</li>
                  </ul>
                </div>
              </div>

              <KeyPoint title="การเฝ้าระวังและการปฏิบัติตน">
                <p><strong>การตรวจวัด:</strong> ดาวเทียมตรวจอุณหภูมิ, GPS วัดความลาดเอียง, เครื่องวัดความสั่นสะเทือน (USGS), ตรวจปริมาณแก๊ส</p>
                <p className="mt-1"><strong>ระหว่างเกิดเหตุ:</strong> <strong className="text-amber-950 underline">ให้อยู่ภายในอาคาร ปิดประตูหน้าต่าง</strong>, ไม่อยู่ที่ต่ำ/ใกล้แม่น้ำ (ป้องกันโคลนไหล Lahar), สวมหน้ากากอนามัย/แว่นตากันเถ้า</p>
                <p className="mt-1"><strong>หลังเกิดเหตุ:</strong> สวมรองเท้าหุ้มส้น, หลีกเลี่ยงการใช้โทรศัพท์หากไม่จำเป็น</p>
              </KeyPoint>
            </div>
          </section>

          {/* ── 02 แผ่นดินไหว ── */}
          <section id="earthquake" className="scroll-mt-24 mb-12">
            <TopicHeading
              num="02"
              title="แผ่นดินไหว"
              extra="ออกสอบสูงสุด 16 ข้อ"
              pastelBadgeClass="bg-amber-100 text-amber-900 border-amber-300"
            />

            <SubHeading>2.1 สาเหตุ กลไก ขนาด และความรุนแรง (8 ข้อ)</SubHeading>

            <div className="space-y-4 text-sm sm:text-base text-zinc-800 leading-relaxed">
              <p>
                <strong>สาเหตุธรรมชาติ (เกิดมากที่สุด):</strong> การปลดปล่อยพลังงานสะสมจากการเคลื่อนตัวของแผ่นธรณี หรือการเลื่อนตัวของ <strong className="text-zinc-950">กลุ่มรอยเลื่อนมีพลัง (Active Fault)</strong>
              </p>

              <ExamTarget title="กลไก Elastic Rebound Theory (แนวคิดการคืนตัวของวัสดุ)" badge="ออกสอบชัวร์">
                <ol className="list-decimal pl-5 space-y-1">
                  <li>แผ่นธรณีได้รับแรงกระทำ → สะสม <strong>ความเค้น (Stress)</strong></li>
                  <li>ชั้นหินเกิด <strong>ความเครียด (Strain)</strong> เปลี่ยนรูปร่าง (ยืด บิด โค้งงอ)</li>
                  <li>สะสมพลังงานเกินขีดจำกัด → หินแตกหัก (<strong>Rupture</strong>) → ปลดปล่อยพลังงานเป็น <strong className="text-purple-950">คลื่นไหวสะเทือน (Seismic Wave)</strong></li>
                  <li>หินคืนตัวกลับสู่สภาวะปกติที่ไม่มีความเค้นและความเครียด</li>
                </ol>
              </ExamTarget>

              <div className="grid sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                <div className="p-3.5 rounded-xl bg-amber-50/60 border border-amber-200/80">
                  <span className="font-bold text-amber-950 block mb-1">ศูนย์เกิดแผ่นดินไหว (Focus / Hypocenter)</span>
                  <p className="text-zinc-700">จุดกำเนิดพลังงาน <strong>อยู่ใต้ผิวโลก</strong> ที่ระดับความลึกต่าง ๆ</p>
                </div>
                <div className="p-3.5 rounded-xl bg-amber-50/60 border border-amber-200/80">
                  <span className="font-bold text-amber-950 block mb-1">จุดเหนือศูนย์เกิดแผ่นดินไหว (Epicenter)</span>
                  <p className="text-zinc-700">ตำแหน่งบนผิวโลก <strong>ตรงเหนือ Focus ในแนวดิ่ง</strong> — สั่นสะเทือนและเสียหายมากที่สุด</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-zinc-700 bg-zinc-100/80 p-3 rounded-xl border border-zinc-200">
                <strong>เครื่องมือ:</strong> Seismograph วัดคลื่นไหวสะเทือน → บันทึกเป็น Seismogram → คำนวณระยะห่าง Epicenter จากความต่างเวลาที่ <strong>คลื่น P และ คลื่น S เดินทางมาถึง</strong>
              </p>

              <HR />

              <p className="font-bold text-zinc-900 text-sm">ตารางเปรียบเทียบสำคัญ: ขนาด (Magnitude) vs ความรุนแรง (Intensity)</p>

              <div className="overflow-x-auto rounded-xl border border-zinc-200">
                <table className="w-full text-xs sm:text-sm text-left">
                  <thead className="bg-amber-100/70 text-amber-950 border-b border-amber-200 font-bold">
                    <tr>
                      <th className="p-3">หัวข้อ</th>
                      <th className="p-3">ขนาด (Magnitude)</th>
                      <th className="p-3">ความรุนแรง (Intensity)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200 bg-white">
                    <tr>
                      <td className="p-3 font-bold text-zinc-900">วัดจากอะไร</td>
                      <td className="p-3"><strong>ปริมาณพลังงาน</strong> ที่ปลดปล่อย ณ Focus</td>
                      <td className="p-3"><strong>ผลกระทบ ความรู้สึก ความเสียหาย</strong> ของสิ่งปลูกสร้าง</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-zinc-900">ค่าที่วัดได้</td>
                      <td className="p-3 font-semibold text-emerald-800">ทุกสถานีวัดได้ &ldquo;เท่ากันเสมอ&rdquo;</td>
                      <td className="p-3 font-semibold text-rose-800">แต่ละพื้นที่ &ldquo;ไม่เท่ากัน&rdquo; (ขึ้นกับระยะห่างและธรณีวิทยา)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-zinc-900">มาตราวัด</td>
                      <td className="p-3">
                        1. ริกเตอร์ (<MathView math="M_L" />) ≤ 650 km<br/>
                        2. ขนาดโมเมนต์ (<MathView math="M_w" />) นิยมใช้ปัจจุบัน
                      </td>
                      <td className="p-3">
                        มาตราเมอร์คัลลีปรับปรุงใหม่ — ตัวเลขโรมัน 12 ระดับ (I ถึง XII)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <WarningBox title="คำเตือนเรื่องหน่วยของแผ่นดินไหว (จุดลวงข้อสอบ!)">
                <p>
                  <strong>&ldquo;ริกเตอร์&rdquo;</strong> และ <strong>&ldquo;แมกนิจูด&rdquo;</strong> <span className="text-rose-800 font-bold">ไม่ใช่หน่วย!</span>
                </p>
                <p className="mt-1 text-rose-900">
                  การระบุที่ถูกต้องคือ: <em>&ldquo;แผ่นดินไหวขนาด 7.8 ตามมาตราริกเตอร์&rdquo;</em> หรือ <em>&ldquo;แผ่นดินไหวขนาด 7.8&rdquo;</em>
                </p>
              </WarningBox>

              <FormulaBox
                title="ความสัมพันธ์ของพลังงานกับขนาดแผ่นดินไหว"
                formula="\Delta \text{Energy} \approx 32^{\Delta M}"
                explanation="ขนาดแผ่นดินไหวที่ต่างกัน 1 ระดับ จะปลดปล่อยพลังงานต่างกันประมาณ 32 เท่า (ต่าง 2 ระดับ พลังงานต่างกันประมาณ 32 × 32 ≈ 1,000 เท่า)"
              />
            </div>

            <HR />

            <SubHeading>2.2 พื้นที่เสี่ยงภัย คาบอุบัติซ้ำ และการปฏิบัติตน (8 ข้อ)</SubHeading>

            <div className="space-y-4 text-sm sm:text-base text-zinc-800 leading-relaxed">
              <div>
                <p className="font-bold text-zinc-900 mb-1.5">1. พื้นที่เสี่ยงภัยระดับโลก:</p>
                <div className="grid sm:grid-cols-3 gap-2.5 text-xs sm:text-sm">
                  <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-950 font-medium">
                    <span className="text-base font-bold block text-red-700">80%</span>
                    แนวรอบมหาสมุทรแปซิฟิก (วงแหวนไฟ / Ring of Fire)
                  </div>
                  <div className="p-3 rounded-xl bg-orange-50 border border-orange-200 text-orange-950 font-medium">
                    <span className="text-base font-bold block text-orange-700">15%</span>
                    แนวเทือกเขาแอลป์ (ยุโรป) และแนวเทือกเขาหิมาลัย (เอเชีย)
                  </div>
                  <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-950 font-medium">
                    <span className="text-base font-bold block text-amber-700">5%</span>
                    ตามแนวรอยแยกกลางมหาสมุทร
                  </div>
                </div>
              </div>

              <div>
                <p className="font-bold text-zinc-900">2. พื้นที่เสี่ยงภัยในประเทศไทย:</p>
                <ul className="list-disc pl-5 space-y-1 mt-1 text-zinc-700">
                  <li>บริเวณ <strong className="text-zinc-950">ภาคเหนือ และ ภาคตะวันตก</strong> เสี่ยงภัยสูงสุด เพราะมีกลุ่มรอยเลื่อนมีพลัง (รอยเลื่อนแม่จัน, พะเยา, ศรีสวัสดิ์)</li>
                  <li><strong className="text-zinc-950">ตัวอย่างข้อสอบ:</strong> แผ่นดินไหวในเมียนมา (ขนาด 8.2 ลึก 10 km) เกิดจาก <strong className="text-amber-900">กลุ่มรอยเลื่อนสะกาย (Sagaing Fault)</strong> วางตัวแนวเหนือ-ใต้ ส่งแรงสั่นสะเทือนถึง กทม.</li>
                </ul>
              </div>

              <KeyPoint title="คาบอุบัติซ้ำ (Recurrence Interval)">
                <p>
                  คือ <strong>ระยะเวลาเฉลี่ยของการเกิดเหตุการณ์ธรรมชาติขนาดใหญ่</strong> (เช่น แผ่นดินไหว สึนามิ) <strong>ซ้ำในพื้นที่เดิม</strong> โดยวิเคราะห์จากสถิติหรือชั้นตะกอนทางธรณี เพื่อประเมินความเสี่ยงและพยากรณ์อนาคต
                </p>
              </KeyPoint>

              <RememberBox title="หลักการปฏิบัติตนเมื่อเกิดแผ่นดินไหว">
                <p><strong>ก่อนเกิด:</strong> ยึดตู้/เฟอร์นิเจอร์หนักติดผนังหรือพื้น, เตรียมอุปกรณ์ยังชีพ, วางแผนอพยพ</p>
                <p className="mt-1.5"><strong>ระหว่างเกิด:</strong></p>
                <ul className="list-disc pl-5 space-y-0.5">
                  <li>ในอาคาร: ยึดหลัก <strong className="text-sky-900">&ldquo;หมอบ หลบ ยึด&rdquo;</strong> อยู่ใต้โต๊ะหรือโครงสร้างแข็งแรง ห่างจากหน้าต่าง</li>
                  <li><strong className="text-rose-800">ห้ามใช้ลิฟต์เด็ดขาด</strong> และ <strong className="text-rose-800">ห้ามจุดเทียน/ไม้ขีดไฟ</strong> (ป้องกันเพลิงไหม้แก๊สรั่ว)</li>
                  <li>ถ้าขับรถ: ชะลอและจอดรถข้างทางในที่โล่งปลอดภัย</li>
                </ul>
                <p className="mt-1.5"><strong>หลังเกิด:</strong> สวมรองเท้าหุ้มส้นเสมอ, ตรวจความเสียหาย/ปิดวาล์วแก๊ส, หลีกเลี่ยงการใช้โทรศัพท์</p>
              </RememberBox>
            </div>
          </section>

          {/* ── 03 สึนามิ ── */}
          <section id="tsunami" className="scroll-mt-24 mb-12">
            <TopicHeading
              num="03"
              title="สึนามิ"
              extra="ออกสอบ 3 ข้อ"
              pastelBadgeClass="bg-sky-100 text-sky-900 border-sky-300"
            />

            <div className="space-y-4 text-sm sm:text-base text-zinc-800 leading-relaxed">
              <p>
                <strong>สาเหตุหลัก:</strong> เกิดจากการ <strong className="text-zinc-950">แทนที่มวลน้ำมหาศาลในแนวดิ่ง</strong> อย่างฉับพลัน ส่วนใหญ่เกิดจากแผ่นดินไหวใต้ทะเล สาเหตุอื่น เช่น ภูเขาไฟปะทุใต้ทะเล, ดินถล่มใต้ทะเล, อุกกาบาต
              </p>

              <ExamTarget title="ตารางเปรียบเทียบพฤติกรรมคลื่นสึนามิ (ออกข้อสอบแน่นอน!)" badge="ออกสอบชัวร์">
                <div className="overflow-x-auto rounded-xl border border-sky-200">
                  <table className="w-full text-xs sm:text-sm text-left">
                    <thead className="bg-sky-100/70 text-sky-950 border-b border-sky-200 font-bold">
                      <tr>
                        <th className="p-3">พารามิเตอร์</th>
                        <th className="p-3">ในทะเลลึก (Deep Water)</th>
                        <th className="p-3">บริเวณชายฝั่ง / น้ำตื้น (Shallow Water)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-200 bg-white">
                      <tr>
                        <td className="p-3 font-bold text-zinc-900">อัตราเร็ว (<MathView math="v" />)</td>
                        <td className="p-3 font-semibold text-emerald-800"><strong>สูงมาก</strong> (หลายร้อย km/h)</td>
                        <td className="p-3 font-semibold text-rose-800"><strong>ลดลง</strong> (แรงเสียดทานก้นทะเล)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-zinc-900">ความยาวคลื่น (<MathView math="\lambda" />)</td>
                        <td className="p-3 font-semibold text-emerald-800"><strong>ยาวมาก</strong> (นับร้อยกิโลเมตร)</td>
                        <td className="p-3 font-semibold text-rose-800"><strong>สั้นลง / ลดลง</strong></td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-zinc-900">ความสูงคลื่น / แอมพลิจูด (<MathView math="A" />)</td>
                        <td className="p-3 text-zinc-600"><strong>ต่ำมาก</strong> (&lt; 1 เมตร สังเกตยาก)</td>
                        <td className="p-3 font-bold text-rose-800"><strong>สูงมากอย่างรวดเร็ว</strong> (ยกตัวเป็นกำแพงน้ำ)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </ExamTarget>

              <div>
                <p className="font-bold text-zinc-900 mb-1">การเฝ้าระวังและสัญญาณบอกเหตุ:</p>
                <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-zinc-700">
                  <li><strong>สัญญาณธรรมชาติ:</strong> น้ำทะเลชายฝั่งลดระดับลงอย่างผิดปกติและรวดเร็ว</li>
                  <li><strong>ระบบเตือนภัย 3 ขั้นตอน:</strong> (1) ตรวจวัดความดันน้ำ & แรงสั่นสะเทือน → (2) ประมวลผลและทำแบบจำลอง → (3) ประกาศเตือนภัยผ่านดาวเทียม/หอเตือนภัย</li>
                </ul>
              </div>

              <RememberBox title="ข้อปฏิบัติสำคัญเมื่อเกิดสึนามิ">
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>ถ้าอยู่บนชายฝั่ง:</strong> รีบวิ่งหนีขึ้นที่สูงทันที หรือขึ้นอาคาร ค.ส.ล. ที่มั่นคง</li>
                  <li><strong>ถ้าอยู่ในเรือกลางทะเล:</strong> <strong className="text-rose-800 underline">ห้ามนำเรือกลับเข้าฝั่งเด็ดขาด!</strong> ให้แล่นเรือออกไปสู่น้ำลึกกลางทะเล เพราะคลื่นในทะเลลึกสูงน้อย ไม่เป็นอันตราย</li>
                </ul>
              </RememberBox>
            </div>
          </section>

          {/* ── 04 รอยต่อแผ่นธรณี ── */}
          <section id="plate-boundaries" className="scroll-mt-24 mb-12">
            <TopicHeading
              num="04"
              title="แนวรอยต่อแผ่นธรณี 3 รูปแบบ"
              extra="จุดเน้นพิเศษ"
              pastelBadgeClass="bg-purple-100 text-purple-900 border-purple-300"
            />

            <ExamTarget title="สรุปแนวรอยต่อแผ่นธรณี 3 รูปแบบ" badge="จุดเน้นข้อสอบ">
              <div className="grid sm:grid-cols-3 gap-3 text-xs sm:text-sm mt-1">
                <div className="p-3.5 rounded-xl bg-white border border-purple-200">
                  <strong className="text-purple-950 block mb-1">1. แบบแยกตัว (Divergent)</strong>
                  <p className="text-purple-900/90">เกิดแผ่นดินไหวระดับ<strong>ตื้น</strong> และเกิดภูเขาไฟ<strong>ตื้น</strong> เช่น แนวสันเขาใต้สมุทรแอตแลนติก</p>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-purple-200">
                  <strong className="text-purple-950 block mb-1">2. แบบเคลื่อนเข้าหากัน (Convergent)</strong>
                  <p className="text-purple-900/90">เกิดแผ่นดินไหวได้ตั้งแต่ <strong>ตื้น กลาง จนถึงลึกมาก</strong> และเกิด <strong>ภูเขาไฟหนาแน่น</strong> (เช่น วงแหวนไฟ)</p>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-purple-200">
                  <strong className="text-purple-950 block mb-1">3. แบบผ่านกันแนวนอน (Transform)</strong>
                  <p className="text-purple-900/90">เกิดแผ่นดินไหวระดับตื้นถึงปานกลาง แต่ <strong className="text-rose-800 underline">&ldquo;ไม่พบภูเขาไฟ&rdquo;</strong> เช่น รอยเลื่อนแซนแอนเดรียส</p>
                </div>
              </div>
            </ExamTarget>
          </section>
        </div>

        {/* ============================================================ */}
        {/* PART 2: ปรากฏการณ์คลื่นกล (Indigo Pastel)                    */}
        {/* ============================================================ */}
        <div>
          <PartHeader
            part="Part 2"
            title="ส่วนที่ 2: ปรากฏการณ์คลื่นกล"
            questions="ออกสอบ 5 ข้อ"
            accentBg="bg-indigo-50/70 border-indigo-200/80"
            accentText="text-indigo-950"
          />

          {/* ── 05 คลื่นกล ── */}
          <section id="wave-basics" className="scroll-mt-24 mb-12">
            <TopicHeading
              num="05"
              title="คลื่นกล ชนิดคลื่น ส่วนประกอบ และพฤติกรรม"
              extra="ออกสอบ 3 ข้อ"
              pastelBadgeClass="bg-indigo-100 text-indigo-900 border-indigo-300"
            />

            <div className="space-y-4 text-sm sm:text-base text-zinc-800 leading-relaxed">
              <div>
                <p className="font-bold text-zinc-900 mb-1.5">1. การจำแนกประเภทคลื่น:</p>
                <div className="grid sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                  <div className="p-3.5 rounded-xl bg-indigo-50/60 border border-indigo-200/80">
                    <strong className="text-indigo-950 block mb-1">คลื่นกล (Mechanical Wave)</strong>
                    <p className="text-indigo-900/90"><strong>ต้องอาศัยตัวกลาง</strong> ในการถ่ายโอนพลังงาน เช่น คลื่นน้ำ, คลื่นในเชือก, คลื่นเสียง, คลื่นแผ่นดินไหว</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-indigo-50/60 border border-indigo-200/80">
                    <strong className="text-indigo-950 block mb-1">คลื่นแม่เหล็กไฟฟ้า (EM Wave)</strong>
                    <p className="text-indigo-900/90"><strong>ไม่อาศัยตัวกลาง</strong> เคลื่อนที่ด้วยความเร็วแสง (<MathView math="3 \times 10^8\text{ m/s}" />) เช่น แสง, รังสี X, ไมโครเวฟ</p>
                  </div>
                </div>
              </div>

              <div>
                <p className="font-bold text-zinc-900 mb-1.5">2. คลื่นตามยาว vs คลื่นตามขวาง:</p>
                <div className="grid sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                  <div className="p-3.5 rounded-xl bg-violet-50/60 border border-violet-200/80">
                    <strong className="text-violet-950 block mb-1">คลื่นตามขวาง (Transverse Wave)</strong>
                    <p className="text-violet-900/90">อนุภาคสั่นในทิศทาง <strong className="text-violet-950">ตั้งฉาก</strong> กับทิศการเคลื่อนที่ เช่น คลื่นในเส้นเชือก, คลื่นผิวน้ำ, คลื่นแม่เหล็กไฟฟ้า</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-violet-50/60 border border-violet-200/80">
                    <strong className="text-violet-950 block mb-1">คลื่นตามยาว (Longitudinal Wave)</strong>
                    <p className="text-violet-900/90">อนุภาคสั่นในแนว <strong className="text-violet-950">ขนาน (ทิศเดียวกัน)</strong> มีส่วนอัด และส่วนขยาย เช่น <strong>คลื่นเสียง</strong>, การอัดสปริง</p>
                  </div>
                </div>
                <p className="mt-1.5 text-xs text-zinc-500">💡 <em>ข้อสังเกต:</em> สปริงเป็นได้ทั้งสองแบบ (อัด-ขยาย = ตามยาว; สะบัดขึ้น-ลง = ตามขวาง)</p>
              </div>

              <FormulaBox
                title="สูตรคำนวณอัตราเร็วคลื่นกล"
                formula="v = f\lambda = \frac{\lambda}{T}"
                explanation="โดยที่ v = อัตราเร็ว (m/s), f = ความถี่ (Hz), λ = ความยาวคลื่น (m), T = คาบเวลา (s) และ f = 1/T"
              />

              <div>
                <p className="font-bold text-zinc-900 mb-2">3. พฤติกรรม 4 ประการของคลื่น:</p>
                <div className="grid sm:grid-cols-2 gap-2.5 text-xs sm:text-sm">
                  <div className="p-3 rounded-xl bg-zinc-50 border border-zinc-200">
                    <strong className="text-zinc-950">1. การสะท้อน:</strong> มุมตกกระทบ = มุมสะท้อน (<MathView math="f, v, \lambda" /> เท่าเดิม)
                  </div>
                  <div className="p-3 rounded-xl bg-amber-50 border border-amber-200">
                    <strong className="text-amber-950">2. การหักเห:</strong> ผ่านตัวกลางต่างชนิด <MathView math="v, \lambda" /> เปลี่ยน <strong className="text-rose-800 underline">แต่ f คงที่เสมอ!</strong>
                  </div>
                  <div className="p-3 rounded-xl bg-zinc-50 border border-zinc-200">
                    <strong className="text-zinc-950">3. การเลี้ยวเบน:</strong> แผ่โค้งอ้อมผ่านสิ่งกีดขวาง/ช่องแคบ (หลักของฮอยเกนส์)
                  </div>
                  <div className="p-3 rounded-xl bg-zinc-50 border border-zinc-200">
                    <strong className="text-zinc-950">4. การแทรกสอด:</strong> รวมแบบเสริม (แอมพลิจูดเพิ่ม) / รวมแบบหักล้าง (แอมพลิจูดลด)
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── 06 การสั่นพ้อง ── */}
          <section id="resonance" className="scroll-mt-24 mb-12">
            <TopicHeading
              num="06"
              title="ความถี่ธรรมชาติและการสั่นพ้อง"
              extra="ออกสอบ 2 ข้อ"
              pastelBadgeClass="bg-violet-100 text-violet-900 border-violet-300"
            />

            <div className="space-y-4 text-sm sm:text-base text-zinc-800 leading-relaxed">
              <div>
                <p className="font-bold text-zinc-900 mb-1">1. ความถี่ธรรมชาติ (Natural Frequency):</p>
                <p className="text-zinc-700">คือความถี่ในการแกว่งหรือสั่นอย่างอิสระของวัตถุเมื่อถูกรบกวน วัตถุแต่ละชิ้นมีค่าเฉพาะตัว</p>
              </div>

              <KeyPoint title="ตัวอย่างลูกตุ้มอย่างง่าย (จุดเน้นข้อสอบ)">
                ความถี่ธรรมชาติของลูกตุ้มขึ้นอยู่กับ <strong className="text-amber-950 underline">ความยาวของเชือกเท่านั้น</strong>:
                <ul className="list-disc pl-5 mt-1 space-y-0.5">
                  <li>เชือกสั้น → แกว่งเร็ว → ความถี่ธรรมชาติสูง (<MathView math="f" /> สูง)</li>
                  <li>เชือกยาว → แกว่งช้า → ความถี่ธรรมชาติต่ำ (<MathView math="f" /> ต่ำ)</li>
                  <li><strong className="text-rose-800">ไม่ขึ้นกับมวลของลูกตุ้ม!</strong></li>
                </ul>
              </KeyPoint>

              <RememberBox title="ผลของการสั่นพ้อง (Resonance)">
                <p>
                  เกิดเมื่อแรงภายนอกมีความถี่เท่ากับความถี่ธรรมชาติของระบบ ส่งผลให้วัตถุ <strong className="text-sky-950 underline">สั่นด้วยแอมพลิจูดที่กว้างขึ้นอย่างมาก / รุนแรงที่สุด</strong>
                </p>
              </RememberBox>
            </div>
          </section>
        </div>

        {/* ============================================================ */}
        {/* PART 3: เสียง (Emerald / Mint Pastel)                        */}
        {/* ============================================================ */}
        <div>
          <PartHeader
            part="Part 3"
            title="ส่วนที่ 3: เสียง"
            questions="ออกสอบ 6 ข้อ"
            accentBg="bg-emerald-50/70 border-emerald-200/80"
            accentText="text-emerald-950"
          />

          {/* ── 07 เสียง ── */}
          <section id="sound-basics" className="scroll-mt-24 mb-12">
            <TopicHeading
              num="07"
              title="พฤติกรรมของเสียง ความเข้ม และระดับเสียง"
              extra="ออกสอบ 2 ข้อ"
              pastelBadgeClass="bg-emerald-100 text-emerald-900 border-emerald-300"
            />

            <div className="space-y-4 text-sm sm:text-base text-zinc-800 leading-relaxed">
              <div>
                <p className="font-bold text-zinc-900 mb-1.5">1. การสะท้อนของเสียง:</p>
                <p className="text-xs sm:text-sm text-zinc-700 mb-2">
                  เสียงคงอยู่ในระบบประสาทการได้ยินนานประมาณ <strong className="text-zinc-950">0.1 วินาที (<MathView math="\frac{1}{10}" /> s)</strong>
                </p>
                <div className="grid sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                  <div className="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-200/80">
                    <strong className="text-emerald-950 block mb-1">เสียงสะท้อนกลับ (Echo)</strong>
                    สะท้อนกลับมา <strong className="text-emerald-950">มากกว่า 0.1 วินาที</strong> (หูแยกได้ยินเสียงซ้ำ)
                  </div>
                  <div className="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-200/80">
                    <strong className="text-emerald-950 block mb-1">การกังวาน / เสียงก้อง (Reverberation)</strong>
                    สะท้อนกลับมา <strong className="text-emerald-950">น้อยกว่า 0.1 วินาที</strong> (ได้ยินเสียงเดิมยืดออกไป)
                  </div>
                </div>
              </div>

              <div>
                <p className="font-bold text-zinc-900 mb-1.5">2. การหักเหของเสียง:</p>
                <FormulaBox
                  title="อัตราเร็วเสียงในอากาศ"
                  formula="v = 331 + 0.6t"
                  explanation="อากาศอุณหภูมิสูง (ร้อน) → v มาก | อากาศอุณหภูมิต่ำ (เย็น) → v น้อย"
                />
                <RememberBox title="ปรากฏการณ์การหักเหในชีวิตประจำวัน">
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>เวลากลางคืน:</strong> อากาศติดพื้นเย็น อากาศชั้นบนร้อน เสียงเบนหักเหกลับลงมา ทำให้ <strong className="text-sky-950">ได้ยินเสียงในเวลากลางคืนชัดเจนกว่ากลางวัน</strong></li>
                    <li><strong>ฟ้าแลบไม่ได้ยินเสียงฟ้าร้อง:</strong> เสียงฟ้าร้องหักเหเบนขึ้นสู่อากาศชั้นบนก่อนมาถึงหู</li>
                  </ul>
                </RememberBox>
              </div>

              <div>
                <p className="font-bold text-zinc-900 mb-1.5">3. ความเข้มเสียง กำลังเสียง และระดับเสียง:</p>
                <div className="grid sm:grid-cols-3 gap-2.5 text-xs sm:text-sm">
                  <div className="p-3 rounded-xl bg-zinc-50 border border-zinc-200">
                    <strong>กำลังเสียง (<MathView math="P" />):</strong> พลังงานต่อเวลา (W หรือ J/s)
                  </div>
                  <div className="p-3 rounded-xl bg-zinc-50 border border-zinc-200">
                    <strong>ความเข้มเสียง (<MathView math="I" />):</strong> กำลังต่อพื้นที่ (<MathView math="W/m^2" />)
                  </div>
                  <div className="p-3 rounded-xl bg-zinc-50 border border-zinc-200">
                    <strong>ระดับเสียง:</strong> ความดัง หน่วยเดซิเบล (dB)
                  </div>
                </div>
                <p className="mt-2 text-xs sm:text-sm text-zinc-600">
                  • มนุษย์เริ่มได้ยินที่ <strong>0 dB</strong> · เสียง <strong>&gt; 120 dB</strong> นาน ๆ อาจสูญเสียการได้ยิน
                </p>
              </div>
            </div>
          </section>

          {/* ── 08 ปรากฏการณ์เสียง / ประโยชน์ ── */}
          <section id="sound-phenomena" className="scroll-mt-24 mb-12">
            <TopicHeading
              num="08"
              title="ปรากฏการณ์ของเสียงและประโยชน์"
              extra="ออกสอบ 4 ข้อ"
              pastelBadgeClass="bg-teal-100 text-teal-900 border-teal-300"
            />

            <div className="space-y-4 text-sm sm:text-base text-zinc-800 leading-relaxed">
              <div>
                <p className="font-bold text-zinc-900 mb-1">1. ช่วงความถี่ที่ได้ยิน:</p>
                <div className="p-3.5 rounded-xl bg-teal-50/60 border border-teal-200/80 text-xs sm:text-sm">
                  หูมนุษย์ปกติได้ยินช่วงความถี่: <strong className="text-teal-950 text-base">20 – 20,000 Hz</strong>
                  <div className="grid sm:grid-cols-2 gap-2 mt-2">
                    <span className="p-2 rounded bg-white border border-teal-100">&lt; 20 Hz = <strong>อินฟราโซนิก (Infrasonic)</strong></span>
                    <span className="p-2 rounded bg-white border border-teal-100">&gt; 20,000 Hz = <strong>อัลตราโซนิก (Ultrasonic)</strong></span>
                  </div>
                </div>
              </div>

              <div>
                <p className="font-bold text-zinc-900 mb-1.5">2. ปรากฏการณ์สำคัญ:</p>
                <div className="space-y-2 text-xs sm:text-sm">
                  <div className="p-3 rounded-xl bg-zinc-50 border border-zinc-200">
                    <strong>บีต (Beats):</strong> แทรกสอดจาก 2 แหล่งที่มีความถี่ต่างกันเล็กน้อย (&le; 7 Hz) → <strong>เสียงดัง-ค่อยสลับกันเป็นจังหวะ</strong>
                  </div>
                  <div className="p-3 rounded-xl bg-zinc-50 border border-zinc-200">
                    <strong>การสั่นพ้องของเสียง:</strong> ความถี่ภายนอกเท่าความถี่ธรรมชาติของอากาศในท่อ → สั่นแอมพลิจูดสูงสุดเกิด <strong>เสียงดังมาก</strong>
                  </div>
                </div>
              </div>

              <ExamTarget title="ปรากฏการณ์ดอพเพลอร์ (Doppler Effect)" badge="ออกสอบแน่">
                <p className="mb-1.5">เกิดเมื่อ <strong>แหล่งกำเนิดเสียง หรือ ผู้ฟัง เคลื่อนที่เข้าหาหรือออกจากกัน</strong>:</p>
                <div className="grid sm:grid-cols-2 gap-2.5 text-xs sm:text-sm">
                  <div className="p-3 rounded-xl bg-white border border-purple-200">
                    <strong className="text-purple-950 block">เคลื่อนที่เข้าหากัน:</strong>
                    <MathView math="\lambda" /> ด้านหน้าสั้นลง → ความถี่สูงขึ้น → <strong className="text-purple-950 font-bold">ได้ยินเสียงแหลมขึ้น</strong>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-purple-200">
                    <strong className="text-purple-950 block">เคลื่อนที่ออกจากกัน:</strong>
                    <MathView math="\lambda" /> ด้านหลังยาวขึ้น → ความถี่ลดลง → <strong className="text-purple-950 font-bold">ได้ยินเสียงทุ้มลง</strong>
                  </div>
                </div>
              </ExamTarget>

              <div>
                <p className="font-bold text-zinc-900 mb-1.5">3. ประโยชน์ของเสียงในชีวิตประจำวัน:</p>
                <div className="grid sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                  <div className="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-200/80">
                    <strong className="text-emerald-950 block mb-1">SONAR:</strong>
                    ส่ง <strong>คลื่นอัลตราซาวนด์</strong> สะท้อนก้นทะเล เพื่อหาความลึก ตรวจหาฝูงปลา หรือสิ่งกีดขวาง
                  </div>
                  <div className="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-200/80">
                    <strong className="text-emerald-950 block mb-1">การแพทย์ (Ultrasound & ESWL):</strong>
                    • <strong>Ultrasound:</strong> ตรวจอวัยวะภายในและทารกในครรภ์<br/>
                    • <strong>ESWL:</strong> คลื่นช็อกสลายก้อนนิ่วในไต
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* ============================================================ */}
        {/* PART 4: แสงสี (Rose / Sky / Fuchsia Pastel)                */}
        {/* ============================================================ */}
        <div>
          <PartHeader
            part="Part 4"
            title="ส่วนที่ 4: แสงสี"
            questions="ออกสอบ 7 ข้อ"
            accentBg="bg-fuchsia-50/70 border-fuchsia-200/80"
            accentText="text-fuchsia-950"
          />

          {/* ── 09 การมองเห็น ── */}
          <section id="eye-vision" className="scroll-mt-24 mb-12">
            <TopicHeading
              num="09"
              title="ตากับการมองเห็น & โรคตาบอดสี"
              extra="ออกสอบ 2 ข้อ"
              pastelBadgeClass="bg-rose-100 text-rose-900 border-rose-300"
            />

            <div className="space-y-4 text-sm sm:text-base text-zinc-800 leading-relaxed">
              <div>
                <p className="font-bold text-zinc-900 mb-1.5">1. เซลล์รับแสงบนจอตา (Retina):</p>
                <div className="grid sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                  <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200">
                    <strong className="text-zinc-950 block mb-1">เซลล์รูปแท่ง (Rod Cell)</strong>
                    รับรู้ความมืด-ความสว่าง ทำงานดีในที่แสงน้อย <strong className="text-rose-800">เห็นภาพขาว-ดำ ไม่เกี่ยวกับการมองเห็นสี!</strong>
                  </div>
                  <div className="p-3.5 rounded-xl bg-fuchsia-50/60 border border-fuchsia-200/80">
                    <strong className="text-fuchsia-950 block mb-1">เซลล์รูปกรวย (Cone Cell)</strong>
                    รับรู้การมองเห็นสี ทำงานดีในที่สว่างเพียงพอ แบ่ง 3 ชนิด ไวต่อ: <strong className="text-fuchsia-950">แสงสีแดง แสงสีเขียว แสงสีน้ำเงิน</strong>
                  </div>
                </div>
              </div>

              <WarningBox title="โรคตาบอดสี (Color Blindness) — ประเด็นออกสอบ!">
                <ul className="list-disc pl-5 space-y-1">
                  <li>เกิดจากความบกพร่องของ <strong>เซลล์รูปกรวย</strong> ชนิดใดชนิดหนึ่ง</li>
                  <li>ควบคุมโดย <strong className="text-rose-950 font-bold">ยีนด้อยบนโครโมโซมเพศ (โครโมโซม X)</strong></li>
                  <li>ส่งผลให้ <strong className="text-rose-950 underline">ผู้ชายมีโอกาสแสดงอาการตาบอดสีมากกว่าผู้หญิง</strong></li>
                </ul>
              </WarningBox>
            </div>
          </section>

          {/* ── 10 แสงสี ── */}
          <section id="color-mixing" className="scroll-mt-24 mb-12">
            <TopicHeading
              num="10"
              title="แผ่นกรองแสง การผสมแสงสี & สารสี"
              extra="ออกสอบ 5 ข้อ"
              pastelBadgeClass="bg-fuchsia-100 text-fuchsia-900 border-fuchsia-300"
            />

            <div className="space-y-5 text-sm sm:text-base text-zinc-800 leading-relaxed">
              <div>
                <p className="font-bold text-zinc-900 mb-1">1. แผ่นกรองแสงสี:</p>
                <p className="text-zinc-700">ยอมให้เฉพาะแสงสีเดียวกับสีของแผ่นกรองผ่านไปได้ และกั้น/ดูดกลืนแสงสีอื่น ๆ เอาไว้</p>
              </div>

              <div>
                <p className="font-bold text-zinc-900 mb-2">2. การผสมแสงสี — แบบบวก (Additive / RGB):</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs sm:text-sm">
                  <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-center">
                    <span className="font-bold text-amber-900">แดง + เขียว</span>
                    <span className="block font-extrabold text-amber-700 mt-0.5">= เหลือง</span>
                  </div>
                  <div className="p-3 rounded-xl bg-pink-50 border border-pink-200 text-center">
                    <span className="font-bold text-pink-900">แดง + น้ำเงิน</span>
                    <span className="block font-extrabold text-pink-700 mt-0.5">= แดงม่วง</span>
                  </div>
                  <div className="p-3 rounded-xl bg-cyan-50 border border-cyan-200 text-center">
                    <span className="font-bold text-cyan-900">เขียว + น้ำเงิน</span>
                    <span className="block font-extrabold text-cyan-700 mt-0.5">= น้ำเงินเขียว</span>
                  </div>
                  <div className="p-3 rounded-xl bg-zinc-100 border border-zinc-300 text-center">
                    <span className="font-bold text-zinc-900">ผสมทั้ง 3 สี</span>
                    <span className="block font-extrabold text-zinc-950 mt-0.5">= แสงขาว</span>
                  </div>
                </div>
              </div>

              <div>
                <p className="font-bold text-zinc-900 mb-2">3. การผสมสารสี — แบบลบ (Subtractive / CMY):</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs sm:text-sm">
                  <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-center">
                    <span className="font-bold text-red-900">เหลือง + แดงม่วง</span>
                    <span className="block font-extrabold text-red-700 mt-0.5">= สารสีแดง</span>
                  </div>
                  <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-center">
                    <span className="font-bold text-emerald-900">เหลือง + น้ำเงินเขียว</span>
                    <span className="block font-extrabold text-emerald-700 mt-0.5">= สารสีเขียว</span>
                  </div>
                  <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 text-center">
                    <span className="font-bold text-blue-900">แดงม่วง + น้ำเงินเขียว</span>
                    <span className="block font-extrabold text-blue-700 mt-0.5">= สารสีน้ำเงิน</span>
                  </div>
                  <div className="p-3 rounded-xl bg-zinc-900 text-white border border-zinc-950 text-center">
                    <span className="font-bold text-zinc-200">ผสมทั้ง 3 สี</span>
                    <span className="block font-extrabold text-zinc-100 mt-0.5">= สารสีดำ</span>
                  </div>
                </div>
              </div>

              <KeyPoint title="กรณีศึกษาตัวอย่าง: แอปเปิ้ลสีแดง (สารสีแดง)">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs sm:text-sm mt-1 text-center">
                  <div className="p-2.5 rounded-lg bg-white border border-amber-200">
                    <span className="text-zinc-600 block">ฉายแสงขาว</span>
                    <strong className="text-red-600 font-bold block text-base mt-0.5">เห็นสีแดง</strong>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white border border-amber-200">
                    <span className="text-zinc-600 block">ฉายแสงสีแดง</span>
                    <strong className="text-red-600 font-bold block text-base mt-0.5">เห็นสีแดง</strong>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white border border-amber-200">
                    <span className="text-zinc-600 block">ฉายแสงสีเขียว</span>
                    <strong className="text-zinc-900 font-bold block text-base mt-0.5">เห็นสีดำ</strong>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white border border-amber-200">
                    <span className="text-zinc-600 block">ฉายแสงสีน้ำเงิน</span>
                    <strong className="text-zinc-900 font-bold block text-base mt-0.5">เห็นสีดำ</strong>
                  </div>
                </div>
              </KeyPoint>
            </div>
          </section>
        </div>

        {/* ============================================================ */}
        {/* QUICK REVIEW (Soft Amber Pastel Box)                         */}
        {/* ============================================================ */}
        <section id="quick-review" className="scroll-mt-24 pt-6">
          <div className="rounded-3xl border border-amber-300/80 bg-amber-50/80 p-6 sm:p-8 shadow-xs">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="p-2 rounded-xl bg-amber-400 text-amber-950 font-bold shadow-2xs">
                <Zap className="w-5 h-5 fill-amber-950 stroke-[2.2]" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-amber-950">
                  ⚡ สรุปด่วน 3 นาที (Quick Review)
                </h3>
                <p className="text-xs sm:text-sm text-amber-900/80">
                  จุดเน้นสำคัญทั้ง 4 บท อ่านจบพร้อมเข้าห้องสอบทันที!
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mt-6 text-xs sm:text-sm text-zinc-800">
              <div className="p-4 rounded-2xl bg-white/90 border border-orange-200 shadow-2xs space-y-2">
                <h4 className="font-bold text-orange-950 flex items-center gap-1.5 text-sm">
                  🌋 ภูเขาไฟ & แผ่นดินไหว
                </h4>
                <ul className="space-y-1 list-disc pl-4 text-zinc-700">
                  <li>ภูเขาไฟ 80% อยู่ Ring of Fire · ฮาวายเกิดจาก Hotspot</li>
                  <li>แก๊สพ่อนมากสุด = <strong>ไอน้ำ (<MathView math="H_2O" />)</strong> · <MathView math="SO_2" /> เกิดฝนกรด · เถ้าภูเขาไฟทำให้อากาศโลกเย็นลง</li>
                  <li>Elastic Rebound: Stress → Strain → Rupture → Seismic Wave</li>
                  <li>ขนาด (Magnitude): ทุกที่เท่ากัน · ต่าง 1 ระดับ = พลังงานต่าง <strong>32 เท่า</strong></li>
                  <li>ความรุนแรง (Intensity): แต่ละที่ต่างกัน · เมอร์คัลลี I–XII</li>
                  <li><strong>ริกเตอร์ไม่ใช่หน่วย</strong> · ไทยเสี่ยงสุด: ภาคเหนือ & ตะวันตก</li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-white/90 border border-sky-200 shadow-2xs space-y-2">
                <h4 className="font-bold text-sky-950 flex items-center gap-1.5 text-sm">
                  🌊 สึนามิ & รอยต่อแผ่นธรณี
                </h4>
                <ul className="space-y-1 list-disc pl-4 text-zinc-700">
                  <li>เกิดจากแทนที่มวลน้ำในแนวดิ่งฉับพลัน</li>
                  <li>ทะเลลึก: เร็วมาก ยาวมาก เตี้ยมาก · ชายฝั่ง: ช้าลง สั้นลง <strong>สูงมาก</strong></li>
                  <li>เรือกลางทะเล: <strong>ห้ามเข้าฝั่ง</strong> ให้ออกน้ำลึก</li>
                  <li>Divergent: ไหวตื้น/ภูเขาไฟตื้น · Convergent: ไหวตื้น–ลึก/ภูเขาไฟหนาแน่น · Transform: ไหวตื้น–กลาง/<strong className="text-rose-800">ไม่มีภูเขาไฟ</strong></li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-white/90 border border-indigo-200 shadow-2xs space-y-2">
                <h4 className="font-bold text-indigo-950 flex items-center gap-1.5 text-sm">
                  〰️ คลื่นกล & การสั่นพ้อง
                </h4>
                <ul className="space-y-1 list-disc pl-4 text-zinc-700">
                  <li>คลื่นกล: ต้องใช้ตัวกลาง · EM: ไม่ใช้ · ตามขวาง: สั่นตั้งฉาก · ตามยาว: สั่นขนาน</li>
                  <li><MathView math="v = f\lambda = \lambda/T" /> · <MathView math="f = 1/T" /></li>
                  <li>หักเห: <MathView math="v, \lambda" /> เปลี่ยน แต่ <strong className="text-rose-800"><MathView math="f" /> คงที่เสมอ</strong></li>
                  <li>ลูกตุ้ม: ความถี่ธรรมชาติขึ้นกับ <strong>ความยาวเชือกเท่านั้น</strong> ไม่เกี่ยวกับมวล</li>
                  <li>Resonance: ความถี่ภายนอก = ความถี่ธรรมชาติ → สั่นด้วย <strong>แอมพลิจูดสูงสุด</strong></li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-white/90 border border-fuchsia-200 shadow-2xs space-y-2">
                <h4 className="font-bold text-fuchsia-950 flex items-center gap-1.5 text-sm">
                  🔊 เสียง & 🎨 แสงสี
                </h4>
                <ul className="space-y-1 list-disc pl-4 text-zinc-700">
                  <li>Echo: &gt; 0.1 s · กังวาน: &lt; 0.1 s · กลางคืนได้ยินชัดกว่ากลางวัน</li>
                  <li>มนุษย์ได้ยิน 20–20,000 Hz · &gt; 120 dB เป็นอันตราย</li>
                  <li>บีต: ความถี่ต่าง &le; 7 Hz → ดังค่อยสลับ · ดอพเพลอร์: เข้าหา = แหลมขึ้น / ออกจาก = ทุ้มลง</li>
                  <li>Rod = ขาว-ดำ/แสงน้อย · Cone = 3 สี (RGB) · ตาบอดสี: ยีนด้อยบน X → ชาย &gt; หญิง</li>
                  <li>RGB (แสง): R+G=เหลือง R+B=Magenta G+B=Cyan R+G+B=ขาว</li>
                  <li>CMY (สารสี): ผสม 3 สี = ดำ · วัตถุสีแดง + แสงเขียว → เห็น<strong>ดำ</strong></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* ── FOOTER ── */}
      <footer className="border-t border-zinc-200 bg-white py-8 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-1 text-xs text-zinc-500">
          <p className="font-semibold text-zinc-700">
            เอกสารสรุปเตรียมสอบปลายภาค วิชา วิทยาศาสตร์ 5 (ว33101) — รวม 46 ข้อ
          </p>
          <p className="text-zinc-500">
            ขอให้ทุกคนทำข้อสอบได้อย่างมั่นใจ 🌟
          </p>
        </div>
      </footer>

      {/* ── BACK TO TOP ── */}
      <BackToTop />
    </div>
  );
}
