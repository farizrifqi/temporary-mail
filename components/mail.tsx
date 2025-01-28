import React from "react";
import MailTitle from "@/components/mail-title";
import MailList from "@/components/mail-list";

function Mail() {
  return (
    <div className="flex h-0 flex-1 flex-col rounded-md border shadow">
      <div className="border-b p-3">
        <div className="flex flex-wrap items-center gap-2">
          <MailTitle />
          <span className="flex-1" />
        </div>
      </div>
      <MailList />
    </div>
  );
}

export default Mail;
