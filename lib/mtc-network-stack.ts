import * as cdk from "aws-cdk-lib";
import { IpAddresses, Vpc } from "aws-cdk-lib/aws-ec2";
import { Construct } from "constructs";
// import * as sqs from 'aws-cdk-lib/aws-sqs';
export class MtcNetworkProps implements cdk.StackProps {
  environment: String;
  env: cdk.Environment;
}
export class MtcNetworkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: MtcNetworkProps) {
    super(scope, id, props);
    const vpc = new Vpc(this, `mtc-vpc-${props?.environment}`, {
      ipAddresses: IpAddresses.cidr("10.0.0.0/16"),
    });
  }
}
