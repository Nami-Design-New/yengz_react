import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Accordion from "react-bootstrap/Accordion";

const TermsAccordin = () => {
  return (
    <Tabs defaultActiveKey="home" id="uncontrolled-tab-example"  className="mb-3 tab" transition >

      <Tab eventKey="home" title="طالب الخدمات(المشتري)"  >

        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>كيف يعمل ينجز؟</Accordion.Header>
            <Accordion.Body>
              <p>
                نقوم بدور الوسيط بين بائع الخدمة والمشتري بما يضمن حقوق الطرفين
                مقابل عمولة 20% أو مايعادل 1$ لكل طلب بقيمة 5$، يتم اقتطاع
                العمولة من البائع حصراً ولا يمكن تحميلها للمشتري بأي حال.
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>كيف يضمن ينجز ان يستلم خدماته؟</Accordion.Header>
            <Accordion.Body>
              <p>
                نضمن في ينجز حقوق البائع والمشتري من خلال عملنا كوسيط بينهما،
                بعد أن تقوم بشراء الخدمة يبقى المبلغ معلقاً ولا يتم تحويله لرصيد
                البائع إلا بعد استلام الخدمة من طرفك بشكل كامل ونضمن الخدمة بعد
                استلامها لمدة 14 يوماً، لمزيد من التفاصيل نرجو العودة إلى صفحة
                الضمان.
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>
              هل أستطيع التواصل مع مقدم الخدمة قبل الشراء؟
            </Accordion.Header>

            <Accordion.Body>
              <p>
                نتيح إمكانية التواصل مع مقدم الخدمة للاستفسار عن الخدمة المعروضة
                أو طلب توضيحات أكثر حولها، وذلك من خلال زر تواصل مع البائع في
                صفحة كل خدمة.
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>
              هل أستطيع التواصل مع مقدم الخدمة قبل الشراء؟
            </Accordion.Header>

            <Accordion.Body>
              <p>
                نتيح إمكانية التواصل مع مقدم الخدمة للاستفسار عن الخدمة المعروضة
                أو طلب توضيحات أكثر حولها، وذلك من خلال زر تواصل مع البائع في
                صفحة كل خدمة.
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
                إذا كان لديك رصيد مشحون مسبقاً أو رصيد حصلت عليه من بيع الخدمات،
                فيمكنك استخدام هذا الرصيد لطلب خدمة جديدة، وذلك من خلال الضغط
                على زر شراء الخدمة وسيتم خصم المبلغ الموجود في رصيدك بشكل
                تلقائي.
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
                جديد: مبلغ المشتريات بين 5$ - 50$ مشتري جاد: مبلغ المشتريات بين
                55$ - 200$ مشتري مميز: مبلغ المشتريات بين 205$ و 995$ مشتري VIP
                مشتريات بمبلغ يعادل أو يزيد عن 1000$
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        );
      </Tab>

      <Tab eventKey="profile" title="مقدم الخدمات(البائع)" >
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>كيف يعمل ينجز؟</Accordion.Header>
            <Accordion.Body>
              <p>
                نقوم بدور الوسيط بين بائع الخدمة والمشتري بما يضمن حقوق الطرفين
                مقابل عمولة 20% أو مايعادل 1$ لكل طلب بقيمة 5$، يتم اقتطاع
                العمولة من البائع حصراً ولا يمكن تحميلها للمشتري بأي حال.
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>كيف يضمن ينجز ان يستلم خدماته؟</Accordion.Header>
            <Accordion.Body>
              <p>
                نضمن في ينجز حقوق البائع والمشتري من خلال عملنا كوسيط بينهما،
                بعد أن تقوم بشراء الخدمة يبقى المبلغ معلقاً ولا يتم تحويله لرصيد
                البائع إلا بعد استلام الخدمة من طرفك بشكل كامل ونضمن الخدمة بعد
                استلامها لمدة 14 يوماً، لمزيد من التفاصيل نرجو العودة إلى صفحة
                الضمان.
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>
              هل أستطيع التواصل مع مقدم الخدمة قبل الشراء؟
            </Accordion.Header>

            <Accordion.Body>
              <p>
                نتيح إمكانية التواصل مع مقدم الخدمة للاستفسار عن الخدمة المعروضة
                أو طلب توضيحات أكثر حولها، وذلك من خلال زر تواصل مع البائع في
                صفحة كل خدمة.
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>
              هل أستطيع التواصل مع مقدم الخدمة قبل الشراء؟
            </Accordion.Header>

            <Accordion.Body>
              <p>
                نتيح إمكانية التواصل مع مقدم الخدمة للاستفسار عن الخدمة المعروضة
                أو طلب توضيحات أكثر حولها، وذلك من خلال زر تواصل مع البائع في
                صفحة كل خدمة.
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
                إذا كان لديك رصيد مشحون مسبقاً أو رصيد حصلت عليه من بيع الخدمات،
                فيمكنك استخدام هذا الرصيد لطلب خدمة جديدة، وذلك من خلال الضغط
                على زر شراء الخدمة وسيتم خصم المبلغ الموجود في رصيدك بشكل
                تلقائي.
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
                جديد: مبلغ المشتريات بين 5$ - 50$ مشتري جاد: مبلغ المشتريات بين
                55$ - 200$ مشتري مميز: مبلغ المشتريات بين 205$ و 995$ مشتري VIP
                مشتريات بمبلغ يعادل أو يزيد عن 1000$
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Tab>

    </Tabs>
  );
};

export default TermsAccordin;
