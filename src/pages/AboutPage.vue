<template>
  <q-page class="bg-white pb-20">
    <section class="relative bg-gray-900 text-white py-24 overflow-hidden">
      <div class="layout-container relative z-10">
        <div class="max-w-4xl">
          <span class="text-brand-500 font-bold tracking-widest uppercase mb-4 block">HAKKIMIZDA</span>
          <h1 class="text-4xl lg:text-5xl font-bold mb-6 uppercase tracking-tighter leading-tight">
            YAŞAM BİLİMLERİNDE <br> 
            <span class="text-brand-400">GELECEĞİ ŞEKİLLENDİRİYORUZ</span>
          </h1>
          <p class="text-gray-400 text-lg leading-relaxed max-w-2xl">
            CEEMS PHOENİX, bilimin ışığında karanlığı aydınlatarak, sağlıklı nesiller hedefiyle geleceğe bilimsel çözümler sunar.
          </p>
        </div>
      </div>
    </section>

    <section class="py-20">
      <div class="layout-container">
        <div class="row q-col-gutter-xl">
          <div class="col-12 col-md-7">
            <h2 class="text-2xl font-bold text-gray-900 mb-6 uppercase border-l-4 border-brand-500 q-pl-md">BİZ KİMİZ?</h2>
            <div class="text-gray-700 text-lg leading-loose space-y-6">
              <p>
                <span class="font-bold text-gray-900">CEEMS PHOENİX Biyoteknoloji Sanayi ve Ticaret A.Ş</span>, yaşam bilimleri ve ileri biyoteknoloji alanlarında yenilikçi, bilim temelli ve sürdürülebilir çözümler geliştirmek amacıyla kurulmuş bir biyoteknoloji şirketidir.
              </p>
              <p>
                Antalya merkezli şirketimiz; biyoteknoloji, genetik ve üreme bilimleri ekseninde yürüttüğü çalışmalarla, sağlıklı nesiller hedefiyle, insan sağlığına ve insan üreme sağlığına katkı sunacak yüksek katma değerli çözümler üretmeyi hedeflemektedir.
              </p>
              <p>
                Bilimin dönüştürücü gücüne inanan CEEMS PHOENİX, modern laboratuvar yaklaşımlarını etik ilkeler ve kalite standartlarıyla birleştirerek; araştırma, geliştirme ve teknoloji odaklı bir kurum kültürü benimsemektedir.
              </p>
            </div>
          </div>
          
          <div class="col-12 col-md-5">
            <q-card flat bordered class="bg-gray-50 rounded-2xl q-pa-lg">
              <h3 class="text-xl font-bold text-gray-900 mb-4 uppercase">MARKA KİMLİĞİMİZ</h3>
              <div class="space-y-4 text-gray-600 leading-relaxed">
                <p><span class="text-brand-600 font-bold">CEEMS</span>, başarıya gidecek yolu görünür kılmayı temsil eder.</p>
                <p><span class="text-brand-600 font-bold">PHOENİX (Anka Kuşu)</span>, yenilenmeyi, sürekliliği ve ileri teknolojiyle yeniden doğuşu simgeler.</p>
                <p>Marka logomuzdaki <span class="font-bold text-gray-800">DNA sarmalı</span>; genetik ve üreme bilimleri alanındaki uzmanlık odağımızı temsil etmektedir.</p>
              </div>
            </q-card>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-brand-600 text-white text-center italic">
      <div class="layout-container">
        <h2 class="text-2xl lg:text-3xl font-light mb-4">“Zamanı durduramıyorsak, çözümü hızlandırmalıyız”</h2>
        <div class="text-brand-200 font-bold uppercase tracking-widest">— DOĞAN CEYLAN</div>
        <q-separator color="white" dark class="q-my-lg opacity-20 mx-auto" style="width: 100px" />
        <div class="text-xl font-bold uppercase tracking-tighter">
          CEEMS PHOENİX BİYOTEKNOLOJİ <br>
          <span class="text-brand-100 font-normal normal-case">“Zamanı Durduramıyor, Bilimin Rehberliğinde Çözümü Hızlandırıyoruz.”</span>
        </div>
      </div>
    </section>

    <section class="py-20 bg-gray-50">
      <div class="layout-container row q-col-gutter-xl">
        <div class="col-12 col-md-6">
          <div class="bg-white q-pa-xl rounded-3xl shadow-sm h-full">
            <h2 class="text-2xl font-bold text-gray-900 mb-4 uppercase">VİZYONUMUZ</h2>
            <p class="text-gray-600">Biyoteknoloji alanında, bilimsel altyapısı güçlü, yenilikçi yaklaşımıyla fark yaratan ve ulusal ile uluslararası ölçekte referans gösterilen öncü bir teknoloji şirketi olmak.</p>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="bg-white q-pa-xl rounded-3xl shadow-sm h-full">
            <h2 class="text-2xl font-bold text-gray-900 mb-4 uppercase">MİSYONUMUZ</h2>
            <p class="text-gray-600">Bilimsel bilgi ve ileri teknoloji yaklaşımlarını bir araya getirerek; yaşam bilimleri alanında güvenilir, etkili ve yenilikçi biyoteknolojik çözümler üretmek.</p>
          </div>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script setup lang="ts">
defineOptions({ name: 'AboutPage' });
</script>