import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const Payment = ({ total }) => {
  return (
    <Tabs>
      <TabList>
        <Tab>Nagad</Tab>
        <Tab>Bkash </Tab>
        <Tab>Cash on delivery</Tab>
      </TabList>

      <TabPanel>
        <div>
          <div>
            <div className="flex flex-col gap-2">
              <label htmlFor="">Amount</label>
              <input
                defaultValue={total}
                className="border h-[40px] px-2,mn"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="">Transaction ID</label>
              <input className="border h-[40px] " type="text" />
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel>
        <div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">Amount</label>
            <input
              defaultValue={total}
              className="border h-[40px] px-2"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">Transaction ID</label>
            <input className="border h-[40px] " type="text" />
          </div>
        </div>
      </TabPanel>
      <TabPanel>
        <h2>Any content 2</h2>
      </TabPanel>
    </Tabs>
  );
};

export default Payment;
