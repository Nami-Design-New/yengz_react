import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Accordion from "react-bootstrap/Accordion";

const FaqAccordin = () => {
  return (
    <div className="container">
      <Tabs
        defaultActiveKey="home"
        id="uncontrolled-tab-example"
        className="mb-3 tab"
        transition
      >
        <Tab eventKey="home" title="البـائع">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>كيف يعمل ينجز؟</Accordion.Header>
              <Accordion.Body>
                <p>
                  نقوم بدور الوسيط بين بائع الخدمة والمشتري بما يضمن حقوق
                  الطرفين مقابل عمولة 20% أو مايعادل 1$ لكل طلب بقيمة 5$، يتم
                  اقتطاع العمولة من البائع حصراً ولا يمكن تحميلها للمشتري بأي
                  حال.
                </p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>
                كيف يضمن ينجز ان يستلم خدماته؟
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  نضمن في ينجز حقوق البائع والمشتري من خلال عملنا كوسيط بينهما،
                  بعد أن تقوم بشراء الخدمة يبقى المبلغ معلقاً ولا يتم تحويله
                  لرصيد البائع إلا بعد استلام الخدمة من طرفك بشكل كامل ونضمن
                  الخدمة بعد استلامها لمدة 14 يوماً، لمزيد من التفاصيل نرجو
                  العودة إلى صفحة الضمان.
                </p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>
                هل أستطيع التواصل مع مقدم الخدمة قبل الشراء؟
              </Accordion.Header>

              <Accordion.Body>
                <p>
                  نتيح إمكانية التواصل مع مقدم الخدمة للاستفسار عن الخدمة
                  المعروضة أو طلب توضيحات أكثر حولها، وذلك من خلال زر تواصل مع
                  البائع في صفحة كل خدمة.
                </p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
              <Accordion.Header>
                هل أستطيع التواصل مع مقدم الخدمة قبل الشراء؟
              </Accordion.Header>

              <Accordion.Body>
                <p>
                  نتيح إمكانية التواصل مع مقدم الخدمة للاستفسار عن الخدمة
                  المعروضة أو طلب توضيحات أكثر حولها، وذلك من خلال زر تواصل مع
                  البائع في صفحة كل خدمة.
                </p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4">
              <Accordion.Header>كيف أطلب خدمة؟</Accordion.Header>

              <Accordion.Body>
                <p>
                  كل ما عليك فعله هو إضافة الخدمة التي ترغب بشرائها إلى سلة
                  مشترياتك وتسديد ثمنها، ثم التواصل مع البائع عبر صفحة المشتريات
                  وتزويده بتفاصيل العمل ليبدأ تنفيذ الخدمة.
                </p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="5">
              <Accordion.Header>هل بإمكاني إلغاء الطلب؟</Accordion.Header>

              <Accordion.Body>
                <p>
                  {" "}
                  ستتمكن من الإلغاء في حالات محددة يمكنك الاطلاع عليها في مقالة
                  إلغاء الطلب، أو التواصل معنا مباشرة عبر مركز المساعدة.
                </p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="6">
              <Accordion.Header>
                هل يمكنني الشراء من رصيد الحساب؟
              </Accordion.Header>

              <Accordion.Body>
                <p>
                  إذا كان لديك رصيد مشحون مسبقاً أو رصيد حصلت عليه من بيع
                  الخدمات، فيمكنك استخدام هذا الرصيد لطلب خدمة جديدة، وذلك من
                  خلال الضغط على زر شراء الخدمة وسيتم خصم المبلغ الموجود في
                  رصيدك بشكل تلقائي.
                </p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="7">
              <Accordion.Header>ما هي رسوم ينجز؟</Accordion.Header>

              <Accordion.Body>
                <p>
                  يتم اقتطاع رسوم إجرائية بنسبة 5% أو بقيمة 2$ كحد أدنى على كل
                  طلب، هذه الرسوم لتغطية تكاليف بوابات الدفع الإلكترونية التي
                  يستخدمها المشتري عند إجراء عمليات الدفع.
                </p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="8">
              <Accordion.Header>
                هل تعاد الرسوم الإجرائية في حالة إلغاء طلب؟
              </Accordion.Header>

              <Accordion.Body>
                <p>
                  في حال إعادة مبلغ الطلب إلى رصيدك في ينجز، تضاف قيمة الطلب فقط
                  دون الرسوم الإجرائية ويمكنك شراء خدمة أخرى مباشرة. أما عند طلب
                  إعادة المبلغ إلى PayPal أو البطاقة الائتمانية، نقوم بإعادة
                  المبلغ الذي قمت بشحنه كاملاً بالإضافة للرسوم.
                </p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="9">
              <Accordion.Header>ماهي مستويات المشترين؟</Accordion.Header>

              <Accordion.Body>
                <p>
                  يمنح المشترين مستويات مختلفة بناءً على قيمة مشترياتهم: مشتري
                  جديد: مبلغ المشتريات بين 5$ - 50$ مشتري جاد: مبلغ المشتريات
                  بين 55$ - 200$ مشتري مميز: مبلغ المشتريات بين 205$ و 995$
                  مشتري VIP مشتريات بمبلغ يعادل أو يزيد عن 1000$
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          );
        </Tab>

        <Tab eventKey="profile" title="المشـتري">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                {" "}
                كيف يضمن ينجز استلام ربح الطلب؟
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  نضمن في ينجز حقوق البائع والمشتري من خلال عملنا كوسيط بينهما،
                  بعد أن يقوم المشتري بطلب الخدمة يبقى المبلغ معلقاً لدينا ثم
                  يتم تحويله لرصيد البائع عند إنهاء الخدمة بشكل كامل، يرجى
                  مراجعة صفحة الضمان لمزيد من التفاصيل.
                </p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>ماذا يعني تعليق الرصيد؟</Accordion.Header>
              <Accordion.Body>
                <p>
                  يتم تعليق الأرباح التي حققها البائع مدة 14 يوماً تبدأ من اليوم
                  التالي لتسليم الطلب وحتى نهاية اليوم الرابع عشر بتوقيت جرينتش،
                  حيث لا يمكن للبائع خلال هذه المدة استخدام الرصيد المعلق
                  للأسباب التالية: المبالغ التي يقوم العملاء بدفعها عند شراء
                  خدمة تحتاج عدة أيام عمل لتصل إلى حسابنا البنكي وتصبح متاحة
                  للإرسال مجدداً. في معظم الحالات، لا يمكن إرسال الأرباح قبل
                  انتهاء مدة التعليق حتى لو أردنا ذلك لأن المبلغ ليس متاحاً
                  للإرسال بعد مدة تعليق الرصيد ضرورية وتساعدنا على ضمان حقوق
                  العملاء ومكافحة محاولات الاحتيال. توفير بيئة عمل آمنة تتيح
                  لجميع المستخدمين العمل بأمان أولوية قصوى بالنسبة لنا
                </p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>كيف أستطيع سحب أرباحي؟</Accordion.Header>

              <Accordion.Body>
                <p>
                  يمكنك سحب الأرباح للمبالغ التي انتهت مدة تعليقها شرط أن تكون
                  10$ فما فوق، وذلك حسب الطريقة الموضحة في مقالة سحب الأرباح.
                </p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
              <Accordion.Header>
                هل يمكنني شراء خدمات من أرباحي؟
              </Accordion.Header>

              <Accordion.Body>
                <p>
                  يمكنك شراء الخدمات من الأرباح التي حصلت عليها بعد انتهاء مدة
                  التعليق البالغة 14 يوماً.
                </p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4">
              <Accordion.Header>
                كيف أستطيع التواصل مع المشتري؟
              </Accordion.Header>

              <Accordion.Body>
                <p>
                  يمكنك التواصل مع المشتري من خلال قسم الطلبات الواردة بعد أن
                  يقوم بطلب خدمتك، كما يمكن للمشترين بدء التواصل معك من خلال
                  الرسائل الخاصة قبل الشراء.
                </p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="5">
              <Accordion.Header>هل بإمكاني إلغاء الطلب؟</Accordion.Header>

              <Accordion.Body>
                <p>
                  ستتمكن من الإلغاء في حالات محددة يمكنك الاطلاع عليها في مقالة
                  إلغاء الطلب، أو التواصل معنا مباشرة عبر مركز المساعدة.
                </p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="6">
              <Accordion.Header>
                أرسلت طلب إستلام ولم يصلني رد من المشتري، كيف أستلم الربح من
                الطلب؟
              </Accordion.Header>

              <Accordion.Body>
                <p>
                  يمكنك التواصل مع المشتري من خلال قسم الطلبات الواردة بعد أن
                  يقوم بطلب خدمتك، كما يمكن للمشترين بدء التواصل معك من خلال
                  الرسائل الخاصة قبل الشراء.
                </p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="7">
              <Accordion.Header>
                {" "}
                أرسلت طلب إستلام ولم يصلني رد من المشتري، كيف أستلم الربح من
                الطلب؟
              </Accordion.Header>

              <Accordion.Body>
                <p>
                  إذا لم يؤكد المشتري استلام الطلب أو لم يطلب أي تعديلات على
                  العمل، يتم تسليم الطلب تلقائياً بعد مرور 72 ساعة دون رد منه.
                </p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="8">
              <Accordion.Header>
                لماذا لا يمكنني تغيير عنوان الخدمة؟
              </Accordion.Header>

              <Accordion.Body>
                <p>
                  بعد مراجعة الخدمة ونشرها في الموقع لن يكون بالإمكان تعديل
                  عنوانها حيث تصبح متاحة للشراء ويتم تقييمها من المشترين،
                  تغييرها قد يؤدي لمشاكل أو سوء فهم بين الطرفين. إذا لاحظت وجود
                  أي خطأ في العنوان يمكنك التواصل معنا عبر مركز المساعدة
                  لإصلاحه، أما في حال الرغبة بتغيير العنوان كلياً فيمكنك إضافة
                  خدمة جديدة بدلاً من ذلك.
                </p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="9">
              <Accordion.Header>
                {" "}
                هل أستطيع إيقاف استقبال طلبات للخدمة؟
              </Accordion.Header>

              <Accordion.Body>
                <p>
                  إذا كنت ترغب بالتوقف عن العمل مؤقتاً، يمكنك إيقاف خدماتك من
                  خلال الطريقة الموضحة في إيقاف الخدمات بشكل مؤقت.
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Tab>

        <Tab eventKey="main" title="عـام">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                كيف يحمي ينجز معلوماتي الشخصية؟
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  نضمن لك في ينجز خصوصية معلوماتك ونحرص على حمايتها. لمعرفة
                  المزيد عن ذلك في سياسة الخصوصية.
                </p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>كيف أعدل معلومات حسابي؟</Accordion.Header>

              <Accordion.Body>
                <p>تستطيع تغيير معلوماتك الشخصية في صفحة إعدادات الحساب .</p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
              <Accordion.Header>
                أين أجد رابط التسويق بالعمولة الخاص بي وكيف أربح من خلاله؟
              </Accordion.Header>

              <Accordion.Body>
                <p>
                  يساعدك برنامج ينجز للتسويق بالعمولة على تحقيق دخل أعلى عبر
                  دعوة أصدقائك لشراء الخدمات من موقع ينجز. بإمكانك معرفة رابط
                  التسويق بالعمولة الخاص بك وباقي التفاصيل عبر صفحة التسويق
                  بالعمولة.
                </p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4">
              <Accordion.Header>
                {" "}
                لماذا يظهر التوقيت في ينجز مختلفاً عن التوقيت لدي؟
              </Accordion.Header>

              <Accordion.Body>
                <p>نعتمد في موقع ينجز توقيت غرينتش GMT كتوقيت افتراضي عالمي.</p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Tab>
      </Tabs>
    </div>
  );
};

export default FaqAccordin;
