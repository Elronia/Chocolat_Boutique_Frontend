import React from 'react';
import '../styling/ShippingGuidelines.css';

const ShippingGuidelines = () => {
    return (
      <div id="shipping-container">
        <div className="ui piled segment">
          <h1 className="ui header">SHIPPING GUIDELINES</h1>
          <div className="emphasized">
            <p>
              {" "}
              <b>General Shipping Information</b> 
            </p>

            <p>
              Orders are shipped from Monday through Wednesday during office hours. Delivery days are Tuesday through Friday. If your order is placed after noon EST, it will not be processed until the following business day and will follow the guidelines listed above. 
            <p>We cannot ship to PO Boxes.</p>
            </p>

            <p>
                <b>Weekends</b>
                <p>We do not ship packages over weekends to avoid products being stored in a non-climate controlled shipping facility. We do not offer Saturday deliveries, unless prior arrangements are made by contacting our team at support@kreutherchocolate.com.</p>
                <p>Orders placed after noon on Thursdays, will ship the following Monday. We do not deliver on Sundays or Mondays.</p>
                <p>We ship using UPS. Once the package has left our facility, Kreuther Handcrafted Chocolate cannot assume responsibility for any shipping delays/problems due solely to the shipping carrier. In order to facilitate delivery, you may add additional information such as an apartment, suite, or floor number to your selected delivery address.</p>
            </p>

            <p>
                <b>Warm Weather Shipping Guidelines</b>
                <p>Due to the perishable nature of our products, available delivery options vary during warmer months. From May through September, we have a minimum purchase requirement of $50 and can only ship via Standard Overnight or Priority Overnight with UPS. We also include special packaging to keep the products cool, at no extra cost to our customers.</p>
                <p>Shipping rates are as follows:</p>
                <p>purchase of $50-$100- $28.95</p>
                <p>purchases over $100- $32.95</p>
                <p>During this time Second Day options will not be available.</p>
                <p>During cooler periods, we provide Standard Overnight, and Second Day Shipping to the continental US.</p>
                <p>Please note that due to fluctuating temperatures, Kreuther Handcrafted Chocolate cannot always guarantee shipping options other than Priority Overnight.</p>
            </p>

            <p>
                <b>New York City Local Delivery and Pickup</b>
                <p>We offer local delivery within a 10 mile radius of our location, Monday through Friday, during the hours of 11am to 8pm. Orders are delivered by car via a third party courier service. Please visit your shopping cart for available days and times.
If the recipient is unavailable to receive the delivery, your order will be returned to Kreuther Handcrafted Chocolate and our customer service team will contact you. Your delivery fee is nonrefundable and will not be applied to any additional delivery services. </p>
                <p>Orders are available for pickup, Monday through Friday - 12pm to 5pm. Due to the freshness of our products, any changes to the date of pickup, must be made before 6pm the previous day. Kreuther Handcrafted Chocolate is not responsible for orders that are unclaimed after 24 hours and no refunds will be issued.</p>
            </p>

            <p>
                <b>Holiday Deliveries</b>
                <p>Deliveries during any holiday are based on UPS business hours.</p>
                <p>If you have any questions about holiday deliveries, please contact our team at support@kreutherchocolate.com.</p>
            </p>

            <p>
                <b>Tracking Your Order</b>
                <p>Once your order has shipped, you will receive an email notification with your tracking number. You may track your order at any time at UPS.com. You can also sign up for text alerts if you’ve created a Shopify account.</p>
            </p>

            <p>
                <b>Signing for your chocolates</b>
                <p>Our packages are shipped with a Signature Release, which allows UPS to leave package without a signature. We found that this policy works best for most of our clients. This avoids the possibility of chocolate being held overnight in a hot storage facility where it may melt.</p>
            </p>

            <p>
                <b>Do you ship internationally?</b>
                <p>We do not ship online orders internationally, but are happy to speak with you about overseas destinations. Please contact our team at support@kreutherchocolate.com.</p>
            </p>
          </div> 
        </div>
      </div>
    );
  };
  
export default ShippingGuidelines;
  
