import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Props = {};

const CoursesPage = (props: Props) => {
  return (
    <div className="p-6">
      <Link href="/teacher/">
        <Button>New Course</Button>
      </Link>
    </div>
  );
};

export default CoursesPage;
